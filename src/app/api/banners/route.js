import pool from "@/lib/db";
import { cleanData } from "@/lib/utils";
import { handleFileUploads } from "@/lib/fileUpload";
import { removeImage } from "@/lib/removeImage";

export async function POST(req) {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    const formData = await req.formData();
    const body = Object.fromEntries(formData.entries());
    const cleanedData = cleanData(body);
    const uploadedFiles = await handleFileUploads(formData);

    const visibility = {
      show_content: cleanedData.show_content == "false" ? 0 : 1,
      show_button: cleanedData.show_button == "false" ? 0 : 1,
      show_description: cleanedData.show_description == "false" ? 0 : 1,
    };

    const [result] = await connection.query(
      `INSERT INTO banner 
        (title, image, button_link, description, status, visibility, alignment)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        cleanedData.title,
        uploadedFiles.image || null,
        cleanedData.button_link || null,
        cleanedData.description || null,
        cleanedData.status || 1,
        JSON.stringify(visibility),
        cleanedData.alignment,
      ]
    );

    await connection.commit();
    return Response.json(
      { message: "Banner added successfully", id: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Add Banner Error:", error);
    return Response.json(
      { error: "Failed to add banner", details: error.message },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const pageIndex = parseInt(searchParams.get("pageIndex") || 0, 10);
//   const pageSize = parseInt(searchParams.get("pageSize") || 10, 10);
//   const offset = pageIndex * pageSize;

//   let connection;
//   try {
//     connection = await pool.getConnection();

//     const [rows] = await connection.query(
//       `SELECT id, title, image, button_link, description, status, visibility, alignment,
//               DATE_FORMAT(created_at, '%Y-%m-%d') as created_at,
//               DATE_FORMAT(updated_at, '%Y-%m-%d') as updated_at
//        FROM banner
//        ORDER BY id DESC
//        LIMIT ? OFFSET ?`,
//       [pageSize, offset]
//     );

//     const [count] = await connection.query(
//       `SELECT COUNT(*) as count FROM banner`
//     );

//     return Response.json(
//       { rows, rowCount: count[0]?.count || 0 },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("❌ Get Banner Error:", error);
//     return Response.json({ error: "Failed to fetch banners" }, { status: 500 });
//   } finally {
//     if (connection) connection.release();
//   }
// }

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const pageIndex = parseInt(searchParams.get("pageIndex") || "0", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
  const offset = pageIndex * pageSize;

  try {
    const [rows] = await pool.query(
      `SELECT id, title, image, button_link, description, status, visibility, alignment,
              DATE_FORMAT(created_at, '%Y-%m-%d') as created_at,
              DATE_FORMAT(updated_at, '%Y-%m-%d') as updated_at
       FROM banner
       ORDER BY id DESC
       LIMIT ? OFFSET ?`,
      [pageSize, offset]
    );

    const [count] = await pool.query(`SELECT COUNT(*) as count FROM banner`);

    return Response.json(
      { rows, rowCount: count[0]?.count || 0 },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Get Banner Error:", error);
    return Response.json({ error: "Failed to fetch banners" }, { status: 500 });
  }
}

export async function PATCH(req) {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    const formData = await req.formData();
    const body = Object.fromEntries(formData.entries());
    const cleanedData = cleanData(body);
    const uploadedFiles = await handleFileUploads(formData);

    if (!cleanedData.id) {
      return Response.json({ error: "Missing Banner ID" }, { status: 400 });
    }

    const [existingRows] = await connection.query(
      `SELECT image FROM banner WHERE id = ?`,
      [cleanedData.id]
    );
    const existingImage = existingRows?.[0]?.image;

    const newImage = uploadedFiles.image || null;
    let finalImage = newImage || cleanedData.image || null;

    let parsedImage;
    try {
      parsedImage =
        typeof cleanedData.image === "string"
          ? JSON.parse(cleanedData.image)
          : cleanedData.image;
    } catch {
      parsedImage = {};
    }

    const isImageRemoval = parsedImage?.image?.length === 0;

    if (isImageRemoval && existingImage) {
      removeImage(existingImage);
      finalImage = null;
    }

    const isSameImage = existingImage && uploadedFiles.image === existingImage;
    if (newImage && existingImage && !isSameImage) {
      removeImage(existingImage);
    }

    const visibility = {
      show_content: cleanedData.show_content == "false" ? 0 : 1,
      show_button: cleanedData.show_button == "false" ? 0 : 1,
      show_description: cleanedData.show_description == "false" ? 0 : 1,
    };

    await connection.query(
      `UPDATE banner 
       SET title = ?, image = ?, button_link = ?, description = ?, status = ?, visibility = ?, alignment = ?
       WHERE id = ?`,
      [
        cleanedData.title,
        finalImage,
        cleanedData.button_link || null,
        cleanedData.description || null,
        cleanedData.status || 1,
        JSON.stringify(visibility),
        cleanedData.alignment,
        cleanedData.id,
      ]
    );

    await connection.commit();
    return Response.json(
      { message: "Banner updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Update Banner Error:", error);
    return Response.json({ error: "Failed to update banner" }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}

export async function DELETE(req) {
  const { id } = await req.json();
  if (!id)
    return Response.json({ error: "Missing Banner ID" }, { status: 400 });

  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    const [rows] = await connection.query(
      `SELECT image FROM banner WHERE id = ?`,
      [id]
    );
    const existingImage = rows?.[0]?.image;
    await connection.query(`DELETE FROM banner WHERE id = ?`, [id]);
    if (existingImage) removeImage(existingImage);

    await connection.commit();
    return Response.json(
      { message: "Banner deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Delete Banner Error:", error);
    return Response.json({ error: "Failed to delete banner" }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}
