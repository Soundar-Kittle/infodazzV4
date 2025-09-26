// export async function saveProductMetaFromForm(
//   connection,
//   metaDetailsJSON,
//   reference_type,
//   reference_id
// ) {
//   if (!metaDetailsJSON || !reference_type || !reference_id) return;

//   let metaObj;
//   try {
//     // metaObj = JSON.parse(metaDetailsJSON);
//     metaObj = metaDetailsJSON;
//   } catch (error) {
//     console.warn("Invalid meta_details JSON");
//     return;
//   }

//   console.log("metaObj", metaObj);

//   const metaAttributeIds = [];

//   const metaIndexes = new Set();
//   Object.keys(metaObj).forEach((key) => {
//     const match = key.match(/metas\[(\d+)]/);
//     if (match) {
//       metaIndexes.add(parseInt(match[1]));
//     }
//   });

//   for (const index of metaIndexes) {
//     const attribute_scope = metaObj[`metas[${index}][attribute_scope]`] || "";
//     const attribute_type = metaObj[`metas[${index}][attribute_type]`] || "";
//     const attribute_key = metaObj[`metas[${index}][attribute_key]`] || "";
//     const is_content = metaObj[`metas[${index}][is_content]`] === "true";

//     let content = "";

//     if (is_content) {
//       content = metaObj[`metas[${index}][content]`] || "";
//     } else {
//       const rawImage =
//         metaObj[`metas[${index}][image]`] ||
//         metaObj[`metas[${index}][existing_image]`];

//       if (typeof rawImage === "object" && rawImage !== null) {
//         content = rawImage.relativePath || "";
//       } else if (typeof rawImage === "string") {
//         content = rawImage;
//       } else {
//         content = "";
//       }
//     }

//     const [attributeResult] = await connection.query(
//       `INSERT INTO meta_attributes (attribute_scope, attribute_type, attribute_key, content)
//        VALUES (?, ?, ?, ?)`,
//       [attribute_scope, attribute_type, attribute_key, content]
//     );

//     metaAttributeIds.push(attributeResult.insertId);
//   }

//   // Check if a meta record already exists for this item
//   const [existingMeta] = await connection.query(
//     `SELECT id, meta_attribute_ids FROM metas WHERE reference_type = ? AND reference_id = ?`,
//     [reference_type, reference_id]
//   );

//   if (existingMeta.length > 0) {
//     const metaId = existingMeta[0].id;

//     // 🧹 Delete old meta_attribute entries
//     let oldIds = [];
//     try {
//       oldIds = JSON.parse(existingMeta[0].meta_attribute_ids);
//       if (!Array.isArray(oldIds)) oldIds = [oldIds];
//     } catch {
//       oldIds = [existingMeta[0].meta_attribute_ids];
//     }

//     if (oldIds.length > 0) {
//       const placeholders = oldIds.map(() => "?").join(",");
//       await connection.query(
//         `DELETE FROM meta_attributes WHERE id IN (${placeholders})`,
//         oldIds
//       );
//     }

//     // 🔁 Update metas row with new attribute IDs
//     await connection.query(
//       `UPDATE metas SET meta_attribute_ids = ? WHERE id = ?`,
//       [JSON.stringify(metaAttributeIds), metaId]
//     );
//   } else {
//     // ➕ Insert new meta reference
//     await connection.query(
//       `INSERT INTO metas (reference_type, reference_id, meta_attribute_ids)
//          VALUES (?, ?, ?)`,
//       [reference_type, reference_id, JSON.stringify(metaAttributeIds)]
//     );
//   }

//   return metaAttributeIds;
// }

// export async function saveProductMetaFromForm(
//   connection,
//   formData,
//   reference_type,
//   reference_id,
//   uploadedFiles = {}
// ) {
//   if (!formData || !reference_type || !reference_id) return;

//   const metaAttributeIds = [];

//   // Collect meta indexes
//   const metaIndexes = new Set();
//   for (const key of formData.keys()) {
//     const match = key.match(/metas\[(\d+)]/);
//     if (match) {
//       metaIndexes.add(parseInt(match[1]));
//     }
//   }

//   for (const index of metaIndexes) {
//     const attribute_scope =
//       formData.get(`metas[${index}][attribute_scope]`) || "";
//     const attribute_type =
//       formData.get(`metas[${index}][attribute_type]`) || "";
//     const attribute_key = formData.get(`metas[${index}][attribute_key]`) || "";
//     const is_content = formData.get(`metas[${index}][is_content]`) === "true";

//     let content = "";

//     if (is_content) {
//       content = formData.get(`metas[${index}][content]`) || "";
//     } else {
//       const imageField = `metas[${index}][image]`;
//       const existingImage = formData.get(`metas[${index}][existing_image]`);

//       if (uploadedFiles[imageField]?.[0]) {
//         content = uploadedFiles[imageField][0]; // ✅ Use uploaded file path
//       } else if (existingImage) {
//         content = existingImage;
//       }
//     }

//     const [attributeResult] = await connection.query(
//       `INSERT INTO meta_attributes (attribute_scope, attribute_type, attribute_key, content)
//        VALUES (?, ?, ?, ?)`,
//       [attribute_scope, attribute_type, attribute_key, content]
//     );

//     metaAttributeIds.push(attributeResult.insertId);
//   }

//   // Check for existing meta
//   const [existingMeta] = await connection.query(
//     `SELECT id, meta_attribute_ids FROM metas WHERE reference_type = ? AND reference_id = ?`,
//     [reference_type, reference_id]
//   );

//   if (existingMeta.length > 0) {
//     const metaId = existingMeta[0].id;

//     let oldIds = [];
//     try {
//       oldIds = JSON.parse(existingMeta[0].meta_attribute_ids);
//       if (!Array.isArray(oldIds)) oldIds = [oldIds];
//     } catch {
//       oldIds = [existingMeta[0].meta_attribute_ids];
//     }

//     if (oldIds.length > 0) {
//       const placeholders = oldIds.map(() => "?").join(",");
//       await connection.query(
//         `DELETE FROM meta_attributes WHERE id IN (${placeholders})`,
//         oldIds
//       );
//     }

//     await connection.query(
//       `UPDATE metas SET meta_attribute_ids = ? WHERE id = ?`,
//       [JSON.stringify(metaAttributeIds), metaId]
//     );
//   } else {
//     await connection.query(
//       `INSERT INTO metas (reference_type, reference_id, meta_attribute_ids)
//        VALUES (?, ?, ?)`,
//       [reference_type, reference_id, JSON.stringify(metaAttributeIds)]
//     );
//   }

//   return metaAttributeIds;
// }

export async function saveProductMetaFromForm(
  connection,
  formData,
  reference_type,
  reference_id,
  uploadedFiles = {}
) {
  if (!formData || !reference_type || !reference_id) return;

  const metaAttributeIds = [];

  // Collect meta indexes from formData keys
  const metaIndexes = new Set();
  for (const key of formData.keys()) {
    const match = key.match(/metas\[(\d+)]/);
    if (match) {
      metaIndexes.add(parseInt(match[1]));
    }
  }

  for (const index of metaIndexes) {
    const attribute_scope =
      formData.get(`metas[${index}][attribute_scope]`) || "";
    const attribute_type =
      formData.get(`metas[${index}][attribute_type]`) || "";
    const attribute_key = formData.get(`metas[${index}][attribute_key]`) || "";
    const is_content = formData.get(`metas[${index}][is_content]`) === "true";

    let content = "";

    if (is_content) {
      content = formData.get(`metas[${index}][content]`) || "";
    } else {
      const imageField = `metas[${index}][image]`;
      const existingImage = formData.get(`metas[${index}][existing_image]`);
      const imageFileOrPath = formData.get(imageField);

      if (imageFileOrPath instanceof File && uploadedFiles[imageField]?.[0]) {
        // New file uploaded — use uploaded file path
        content = uploadedFiles[imageField][0];
      } else if (
        typeof imageFileOrPath === "string" &&
        imageFileOrPath.startsWith("/api/uploads/")
      ) {
        // Already uploaded image path passed directly in field
        content = imageFileOrPath;
      } else if (existingImage) {
        // Legacy fallback
        content = existingImage;
      }
    }

    const [attributeResult] = await connection.query(
      `INSERT INTO meta_attributes (attribute_scope, attribute_type, attribute_key, content)
       VALUES (?, ?, ?, ?)`,
      [attribute_scope, attribute_type, attribute_key, content]
    );

    metaAttributeIds.push(attributeResult.insertId);
  }

  // Check for existing meta
  const [existingMeta] = await connection.query(
    `SELECT id, meta_attribute_ids FROM metas WHERE reference_type = ? AND reference_id = ?`,
    [reference_type, reference_id]
  );

  if (existingMeta.length > 0) {
    const metaId = existingMeta[0].id;

    let oldIds = [];
    try {
      oldIds = JSON.parse(existingMeta[0].meta_attribute_ids);
      if (!Array.isArray(oldIds)) oldIds = [oldIds];
    } catch {
      oldIds = [existingMeta[0].meta_attribute_ids];
    }

    if (oldIds.length > 0) {
      const placeholders = oldIds.map(() => "?").join(",");
      await connection.query(
        `DELETE FROM meta_attributes WHERE id IN (${placeholders})`,
        oldIds
      );
    }

    await connection.query(
      `UPDATE metas SET meta_attribute_ids = ? WHERE id = ?`,
      [JSON.stringify(metaAttributeIds), metaId]
    );
  } else {
    await connection.query(
      `INSERT INTO metas (reference_type, reference_id, meta_attribute_ids)
       VALUES (?, ?, ?)`,
      [reference_type, reference_id, JSON.stringify(metaAttributeIds)]
    );
  }

  return metaAttributeIds;
}

export async function deleteMetaAndAttributes(
  connection,
  reference_type,
  reference_id
) {
  if (!reference_type || !reference_id) return;

  const [metas] = await connection.query(
    `SELECT id, meta_attribute_ids FROM metas WHERE reference_type = ? AND reference_id = ?`,
    [reference_type, reference_id]
  );

  for (const meta of metas) {
    let attributeIds = [];

    try {
      attributeIds = JSON.parse(meta.meta_attribute_ids);
      if (!Array.isArray(attributeIds)) attributeIds = [attributeIds];
    } catch {
      attributeIds = [meta.meta_attribute_ids];
    }

    if (attributeIds.length > 0) {
      const placeholders = attributeIds.map(() => "?").join(",");
      await connection.query(
        `DELETE FROM meta_attributes WHERE id IN (${placeholders})`,
        attributeIds
      );
    }

    await connection.query(`DELETE FROM metas WHERE id = ?`, [meta.id]);
  }
}
