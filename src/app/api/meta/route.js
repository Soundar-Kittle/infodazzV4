import pool from "@/lib/db";
import { handleFileUploads } from "@/lib/fileUpload";
import { cleanData } from "@/lib/utils";

// ✅ ADD Meta
export async function POST(req) {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    const formData = await req.formData();
    const body = Object.fromEntries(formData.entries());
    const cleanedData = cleanData(body);
    const uploadedFiles = await handleFileUploads(formData);

    const reference_type = cleanedData.reference_type;
    const reference_id = cleanedData.reference_id;

    // Check if reference already exists
    const [existingRef] = await connection.query(
      `SELECT id FROM metas WHERE reference_type = ? AND reference_id = ?`,
      [reference_type, reference_id]
    );

    if (existingRef.length > 0) {
      return Response.json(
        {
          error:
            "Meta already exists for this product. Please use update instead.",
        },
        { status: 400 }
      );
    }

    const metaAttributeIds = [];

    // Process meta array from form data
    const formKeys = [...formData.keys()];

    // Get all meta indexes
    const metaIndexes = new Set();
    formKeys.forEach((key) => {
      if (key.startsWith("metas[") && key.includes("][")) {
        const indexMatch = key.match(/metas\[(\d+)\]/);
        if (indexMatch) {
          metaIndexes.add(parseInt(indexMatch[1]));
        }
      }
    });

    // Process each meta entry
    // for (const index of metaIndexes) {
    //   const attribute_scope = formData.get(`metas[${index}][attribute_scope]`);
    //   const attribute_type = formData.get(`metas[${index}][attribute_type]`);
    //   const attribute_key = formData.get(`metas[${index}][attribute_key]`);
    //   const is_content = formData.get(`metas[${index}][is_content]`) === "true";

    //   let content = "";
    //   if (is_content) {
    //     content = formData.get(`metas[${index}][content]`) || "";
    //   } else {
    //     // Get image file from uploaded files or use existing path
    //     const imageField = `metas[${index}][image]`;
    //     content = uploadedFiles[imageField] || "";
    //   }

    //   // Insert meta attribute
    //   const [attributeResult] = await connection.query(
    //     `INSERT INTO meta_attributes (attribute_scope, attribute_type, attribute_key, content)
    //      VALUES (?, ?, ?, ?)`,
    //     [attribute_scope, attribute_type, attribute_key, content]
    //   );

    //   metaAttributeIds.push(attributeResult.insertId);
    // }

    // Inside your meta attribute processing loop in POST
    for (const index of metaIndexes) {
      const attribute_scope = formData.get(`metas[${index}][attribute_scope]`);
      const attribute_type = formData.get(`metas[${index}][attribute_type]`);
      const attribute_key = formData.get(`metas[${index}][attribute_key]`);
      const is_content = formData.get(`metas[${index}][is_content]`) === "true";

      // 🚫 Duplicate check
      const [conflictCheck] = await connection.query(
        `
    SELECT a.id FROM metas m
    JOIN JSON_TABLE(m.meta_attribute_ids, '$[*]' COLUMNS(id INT PATH '$')) AS j
    JOIN meta_attributes a ON a.id = j.id
    WHERE m.reference_type = ? AND m.reference_id = ?
      AND a.attribute_scope = ? AND a.attribute_type = ? AND a.attribute_key = ?
    `,
        [
          reference_type,
          reference_id,
          attribute_scope,
          attribute_type,
          attribute_key,
        ]
      );

      if (conflictCheck.length > 0) {
        await connection.rollback();
        return Response.json(
          {
            error: `Already have same meta for this item`,
          },
          { status: 409 }
        );
      }

      let content = "";
      if (is_content) {
        content = formData.get(`metas[${index}][content]`) || "";
      } else {
        const imageField = `metas[${index}][image]`;
        content = uploadedFiles[imageField] || "";
      }

      const [attributeResult] = await connection.query(
        `INSERT INTO meta_attributes (attribute_scope, attribute_type, attribute_key, content)
     VALUES (?, ?, ?, ?)`,
        [attribute_scope, attribute_type, attribute_key, content]
      );

      metaAttributeIds.push(attributeResult.insertId);
    }

    // Insert or update meta reference with JSON array of attribute IDs
    if (existingRef.length > 0) {
      // Get existing meta attribute IDs
      const [existingMeta] = await connection.query(
        `SELECT meta_attribute_ids FROM metas WHERE id = ?`,
        [existingRef[0].id]
      );

      let existingIds = [];
      try {
        existingIds = JSON.parse(existingMeta[0].meta_attribute_ids);
        if (!Array.isArray(existingIds)) {
          existingIds = [existingIds];
        }
      } catch (e) {
        existingIds = [existingMeta[0].meta_attribute_ids];
      }

      // Update with combined IDs
      const combinedIds = [...existingIds, ...metaAttributeIds];
      await connection.query(
        `UPDATE metas SET meta_attribute_ids = ? WHERE id = ?`,
        [JSON.stringify(combinedIds), existingRef[0].id]
      );
    } else {
      // Insert new reference with attribute IDs as JSON array
      await connection.query(
        `INSERT INTO metas (reference_type, reference_id, meta_attribute_ids)
         VALUES (?, ?, ?)`,
        [reference_type, reference_id, JSON.stringify(metaAttributeIds)]
      );
    }

    await connection.commit();
    return Response.json(
      { message: "Meta tags added successfully" },
      { status: 201 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Meta Add Error:", error);
    return Response.json(
      { error: "Failed to add meta tags", details: error.message },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const all = searchParams.get("all") === "true";
//   let pageIndex = parseInt(searchParams.get("pageIndex")) || 0;
//   let pageSize = parseInt(searchParams.get("pageSize")) || 10;
//   const filters = searchParams.get("filters");

//   let reference_type = "";
//   let reference_id = "";

//   if (filters) {
//     try {
//       const parsedFilters = JSON.parse(filters);
//       reference_type = parsedFilters.reference_type || "";
//       reference_id = parsedFilters.reference_id || "";
//     } catch {
//       return Response.json(
//         { error: "Invalid filters format." },
//         { status: 400 }
//       );
//     }
//   }

//   const offset = pageIndex * pageSize;

//   let connection;
//   try {
//     connection = await pool.getConnection();

//     // Base query
//     let baseQuery = `
//         SELECT
//           m.id, m.reference_type, m.reference_id, m.meta_attribute_ids,
//           DATE_FORMAT(m.created_at, '%Y-%m-%d') as created_at,
//           DATE_FORMAT(m.updated_at, '%Y-%m-%d') as updated_at
//         FROM metas m
//         WHERE 1 = 1
//       `;

//     let countQuery = `
//         SELECT COUNT(*) as count
//         FROM metas m
//         WHERE 1 = 1
//       `;

//     const queryParams = [];
//     const countParams = [];

//     if (reference_type) {
//       baseQuery += ` AND m.reference_type = ?`;
//       countQuery += ` AND m.reference_type = ?`;
//       queryParams.push(reference_type);
//       countParams.push(reference_type);
//     }

//     if (reference_id) {
//       baseQuery += ` AND m.reference_id = ?`;
//       countQuery += ` AND m.reference_id = ?`;
//       queryParams.push(reference_id);
//       countParams.push(reference_id);
//     }

//     // Apply pagination only if `all` is not true
//     if (!all) {
//       baseQuery += ` ORDER BY m.id DESC LIMIT ? OFFSET ?`;
//       queryParams.push(pageSize, offset);
//     } else {
//       baseQuery += ` ORDER BY m.id DESC`;
//     }

//     const [rows] = await connection.query(baseQuery, queryParams);
//     const [countResult] = await connection.query(countQuery, countParams);
//     const rowCount = countResult[0]?.count || 0;

//     // Process rows
//     const processedRows = [];

//     for (const row of rows) {
//       let attributeIds = [];

//       try {
//         attributeIds = JSON.parse(row.meta_attribute_ids);
//         if (!Array.isArray(attributeIds)) attributeIds = [attributeIds];
//       } catch (e) {
//         attributeIds = [row.meta_attribute_ids];
//       }

//       let attributes = [];
//       if (attributeIds.length > 0) {
//         const placeholders = attributeIds.map(() => "?").join(",");
//         const [attributeResult] = await connection.query(
//           `SELECT id, attribute_scope, attribute_type, attribute_key, content
//              FROM meta_attributes
//              WHERE id IN (${placeholders})`,
//           attributeIds
//         );
//         attributes = attributeResult;
//       }

//       const metas = attributes.map((attr) => {
//         const isImage =
//           !attr.content.includes("{") &&
//           !attr.content.includes("<") &&
//           (attr.content.toLowerCase().endsWith(".jpg") ||
//             attr.content.toLowerCase().endsWith(".png") ||
//             attr.content.toLowerCase().endsWith(".webp") ||
//             attr.content.toLowerCase().endsWith(".jpeg"));

//         return {
//           id: attr.id,
//           attribute_scope: attr.attribute_scope,
//           attribute_type: attr.attribute_type,
//           attribute_key: attr.attribute_key,
//           content: attr.content,
//           is_content: !isImage,
//           image: isImage ? attr.content : null,
//         };
//       });

//       processedRows.push({
//         id: row.id,
//         reference_type: row.reference_type,
//         reference_id: row.reference_id,
//         metas: metas,
//         created_at: row.created_at,
//         updated_at: row.updated_at,
//       });
//     }

//     return Response.json({ rows: processedRows, rowCount }, { status: 200 });
//   } catch (error) {
//     console.error("❌ Meta Fetch Error:", error);
//     return Response.json(
//       { error: "Failed to fetch meta tags" },
//       { status: 500 }
//     );
//   } finally {
//     if (connection) connection.release();
//   }
// }

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const all = searchParams.get("all") === "true";
  const pageIndex = parseInt(searchParams.get("pageIndex") || "0", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
  const offset = pageIndex * pageSize;
  const filters = searchParams.get("filters");

  let reference_type = "";
  let reference_id = "";

  if (filters) {
    try {
      const parsedFilters = JSON.parse(filters);
      reference_type = parsedFilters.reference_type || "";
      reference_id = parsedFilters.reference_id || "";
    } catch {
      return Response.json(
        { error: "Invalid filters format." },
        { status: 400 }
      );
    }
  }

  try {
    // Base query
    let baseQuery = `
      SELECT
        m.id, m.reference_type, m.reference_id, m.meta_attribute_ids,
        DATE_FORMAT(m.created_at, '%Y-%m-%d') as created_at,
        DATE_FORMAT(m.updated_at, '%Y-%m-%d') as updated_at
      FROM metas m
      WHERE 1 = 1
    `;

    let countQuery = `SELECT COUNT(*) as count FROM metas m WHERE 1 = 1`;

    const queryParams = [];
    const countParams = [];

    if (reference_type) {
      baseQuery += ` AND m.reference_type = ?`;
      countQuery += ` AND m.reference_type = ?`;
      queryParams.push(reference_type);
      countParams.push(reference_type);
    }

    if (reference_id) {
      baseQuery += ` AND m.reference_id = ?`;
      countQuery += ` AND m.reference_id = ?`;
      queryParams.push(reference_id);
      countParams.push(reference_id);
    }

    if (!all) {
      baseQuery += ` ORDER BY m.id DESC LIMIT ? OFFSET ?`;
      queryParams.push(pageSize, offset);
    } else {
      baseQuery += ` ORDER BY m.id DESC`;
    }

    const [rows] = await pool.query(baseQuery, queryParams);
    const [countResult] = await pool.query(countQuery, countParams);
    const rowCount = countResult[0]?.count || 0;

    const processedRows = [];

    for (const row of rows) {
      let attributeIds = [];
      try {
        attributeIds = JSON.parse(row.meta_attribute_ids);
        if (!Array.isArray(attributeIds)) attributeIds = [attributeIds];
      } catch {
        attributeIds = [row.meta_attribute_ids];
      }

      let attributes = [];
      if (attributeIds.length > 0) {
        const placeholders = attributeIds.map(() => "?").join(",");
        const [attributeResult] = await pool.query(
          `SELECT id, attribute_scope, attribute_type, attribute_key, content
           FROM meta_attributes
           WHERE id IN (${placeholders})`,
          attributeIds
        );
        attributes = attributeResult;
      }

      const metas = attributes.map((attr) => {
        const isImage =
          !attr.content.includes("{") &&
          !attr.content.includes("<") &&
          (attr.content.toLowerCase().endsWith(".jpg") ||
            attr.content.toLowerCase().endsWith(".png") ||
            attr.content.toLowerCase().endsWith(".webp") ||
            attr.content.toLowerCase().endsWith(".jpeg"));

        return {
          id: attr.id,
          attribute_scope: attr.attribute_scope,
          attribute_type: attr.attribute_type,
          attribute_key: attr.attribute_key,
          content: attr.content,
          is_content: !isImage,
          image: isImage ? attr.content : null,
        };
      });

      processedRows.push({
        id: row.id,
        reference_type: row.reference_type,
        reference_id: row.reference_id,
        metas: metas,
        created_at: row.created_at,
        updated_at: row.updated_at,
      });
    }

    return Response.json({ rows: processedRows, rowCount }, { status: 200 });
  } catch (error) {
    console.error("❌ Meta Fetch Error:", error);
    return Response.json(
      { error: "Failed to fetch meta tags", details: error.message },
      { status: 500 }
    );
  }
}

// ✅ DELETE Meta
export async function DELETE(req) {
  const { id } = await req.json();
  if (!id) return Response.json({ error: "Missing meta ID" }, { status: 400 });

  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    // Get attribute IDs before deleting
    const [metaRow] = await connection.query(
      `SELECT meta_attribute_ids FROM metas WHERE id = ?`,
      [id]
    );

    if (metaRow.length === 0) {
      return Response.json({ error: "Meta not found" }, { status: 404 });
    }

    let attributeIds = [];
    try {
      attributeIds = JSON.parse(metaRow[0].meta_attribute_ids);
      if (!Array.isArray(attributeIds)) {
        attributeIds = [attributeIds];
      }
    } catch (e) {
      attributeIds = [metaRow[0].meta_attribute_ids];
    }

    // Delete meta reference
    await connection.query(`DELETE FROM metas WHERE id = ?`, [id]);

    // Delete associated attributes if any exist
    if (attributeIds.length > 0) {
      const placeholders = attributeIds.map(() => "?").join(",");
      await connection.query(
        `DELETE FROM meta_attributes WHERE id IN (${placeholders})`,
        attributeIds
      );
    }

    await connection.commit();
    return Response.json(
      { message: "Meta tags deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Meta Delete Error:", error);
    return Response.json(
      { error: "Failed to delete meta tags" },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}

// ✅ PATCH Meta
export async function PATCH(req) {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    const formData = await req.formData();
    const id = formData.get("id");
    if (!id) {
      return Response.json({ error: "Missing meta ID" }, { status: 400 });
    }

    const body = Object.fromEntries(formData.entries());
    const cleanedData = cleanData(body);
    const uploadedFiles = await handleFileUploads(formData);

    const reference_type = cleanedData.reference_type;
    const reference_id = cleanedData.reference_id;

    // ✅ Prevent duplicate reference usage in another row
    const [conflictMeta] = await connection.query(
      `SELECT id FROM metas 
       WHERE reference_type = ? AND reference_id = ? AND id != ?`,
      [reference_type, reference_id, id]
    );

    if (conflictMeta.length > 0) {
      await connection.rollback();
      return Response.json(
        {
          error:
            "Meta already exists for this item. Please use update instead.",
        },
        { status: 400 }
      );
    }

    // Get current meta data
    const [currentMeta] = await connection.query(
      `SELECT meta_attribute_ids FROM metas WHERE id = ?`,
      [id]
    );

    if (currentMeta.length === 0) {
      return Response.json({ error: "Meta not found" }, { status: 404 });
    }

    // Parse existing attribute IDs
    let existingAttributeIds = [];
    try {
      existingAttributeIds = JSON.parse(currentMeta[0].meta_attribute_ids);
      if (!Array.isArray(existingAttributeIds)) {
        existingAttributeIds = [existingAttributeIds];
      }
    } catch (e) {
      existingAttributeIds = [currentMeta[0].meta_attribute_ids];
    }

    // Fetch current attributes for fallback
    const existingAttributes = {};
    if (existingAttributeIds.length > 0) {
      const placeholders = existingAttributeIds.map(() => "?").join(",");
      const [existingResults] = await connection.query(
        `SELECT id, attribute_key, content FROM meta_attributes WHERE id IN (${placeholders})`,
        existingAttributeIds
      );

      existingResults.forEach((attr) => {
        existingAttributes[attr.id] = attr;
      });
    }

    // Delete old attributes
    if (existingAttributeIds.length > 0) {
      const placeholders = existingAttributeIds.map(() => "?").join(",");
      await connection.query(
        `DELETE FROM meta_attributes WHERE id IN (${placeholders})`,
        existingAttributeIds
      );
    }

    // Parse new attributes
    const newAttributeIds = [];
    const formKeys = [...formData.keys()];
    const metaIndexes = new Set();

    formKeys.forEach((key) => {
      const match = key.match(/metas\[(\d+)\]/);
      if (match) {
        metaIndexes.add(parseInt(match[1]));
      }
    });

    for (const index of metaIndexes) {
      const attribute_scope = formData.get(`metas[${index}][attribute_scope]`);
      const attribute_type = formData.get(`metas[${index}][attribute_type]`);
      const attribute_key = formData.get(`metas[${index}][attribute_key]`);
      const is_content = formData.get(`metas[${index}][is_content]`) === "true";
      const existing_id = formData.get(`metas[${index}][id]`) || null;

      let content = "";
      if (is_content) {
        content = formData.get(`metas[${index}][content]`) || "";
      } else {
        const imageField = `metas[${index}][image]`;
        const existingImagePath = formData.get(
          `metas[${index}][existing_image]`
        );

        if (uploadedFiles[imageField]) {
          content = uploadedFiles[imageField];
        } else if (existingImagePath && existingImagePath.trim() !== "") {
          content = existingImagePath;
        } else if (
          existing_id &&
          existingAttributes[existing_id] &&
          existingAttributes[existing_id].content
        ) {
          content = existingAttributes[existing_id].content;
        }
      }

      const [attributeResult] = await connection.query(
        `INSERT INTO meta_attributes (attribute_scope, attribute_type, attribute_key, content)
         VALUES (?, ?, ?, ?)`,
        [attribute_scope, attribute_type, attribute_key, content]
      );

      newAttributeIds.push(attributeResult.insertId);
    }

    // Update metas table
    await connection.query(
      `UPDATE metas SET
         reference_type = ?,
         reference_id = ?,
         meta_attribute_ids = ?
       WHERE id = ?`,
      [reference_type, reference_id, JSON.stringify(newAttributeIds), id]
    );

    await connection.commit();
    return Response.json(
      { message: "Meta tags updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Meta Edit Error:", error);
    return Response.json(
      { error: "Failed to update meta tags", details: error.message },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}
