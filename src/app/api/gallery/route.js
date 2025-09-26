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

    const [result] = await connection.query(
      `INSERT INTO gallery_images (image_path, display_order, is_active) VALUES (?, ?, ?)`,
      [
        uploadedFiles.image || null,
        cleanedData.display_order || 0,
        1,
      ]
    );

    await connection.commit();
    return Response.json(
      { message: "Gallery image added successfully", id: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Add Gallery Error:", error);
    return Response.json({ error: "Failed to add image" }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const pageIndex = parseInt(searchParams.get("pageIndex") || "0", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "20", 10);
  const offset = pageIndex * pageSize;

  try {
    const [rows] = await pool.query(
      `SELECT id, image_path, display_order, is_active,
              DATE_FORMAT(created_at, '%Y-%m-%d') as created_at
       FROM gallery_images
       ORDER BY display_order ASC
       LIMIT ? OFFSET ?`,
      [pageSize, offset]
    );

    const [count] = await pool.query(`SELECT COUNT(*) as count FROM gallery_images`);

    return Response.json(
      { rows, rowCount: count[0]?.count || 0 },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Get Gallery Error:", error);
    return Response.json({ error: "Failed to fetch gallery images" }, { status: 500 });
  }
}

export async function PATCH(req) {
  let connection;
  try {
    const contentType = req.headers.get("content-type") || "";

    connection = await pool.getConnection();
    await connection.beginTransaction();

    // ✅ 1. Handle reorder array patch
    if (contentType.includes("application/json")) {
      const updates = await req.json();

      if (!Array.isArray(updates)) {
        return Response.json({ error: "Invalid reorder payload" }, { status: 400 });
      }

      for (const row of updates) {
        if (row?.id == null || row?.display_order == null) continue;

        await connection.query(
          `UPDATE gallery_images SET display_order = ? WHERE id = ?`,
          [row.display_order, row.id]
        );
      }

      await connection.commit();
      return Response.json({ message: "Gallery order updated successfully" }, { status: 200 });
    }

    // ✅ 2. Handle form-based update (image edit)
    const formData = await req.formData();
    const body = Object.fromEntries(formData.entries());
    const cleanedData = cleanData(body);
    const uploadedFiles = await handleFileUploads(formData);

    if (!cleanedData.id) {
      return Response.json({ error: "Missing image ID" }, { status: 400 });
    }

    const [existingRows] = await connection.query(
      `SELECT image_path FROM gallery_images WHERE id = ?`,
      [cleanedData.id]
    );
    const existingImage = existingRows?.[0]?.image_path;

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

    await connection.query(
      `UPDATE gallery_images SET image_path = ?, display_order = ? WHERE id = ?`,
      [finalImage, cleanedData.display_order || 0, cleanedData.id]
    );

    await connection.commit();
    return Response.json({ message: "Gallery image updated successfully" }, { status: 200 });

  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Update Gallery Error:", error);
    return Response.json({ error: "Failed to update gallery image" }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}


export async function DELETE(req) {
  const { id } = await req.json();
  if (!id) {
    return Response.json({ error: "Missing image ID" }, { status: 400 });
  }

  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    const [rows] = await connection.query(
      `SELECT image_path FROM gallery_images WHERE id = ?`,
      [id]
    );
    const existingImage = rows?.[0]?.image_path;

    await connection.query(`DELETE FROM gallery_images WHERE id = ?`, [id]);
    if (existingImage) removeImage(existingImage);

    await connection.commit();
    return Response.json({ message: "Image deleted successfully" }, { status: 200 });
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Delete Gallery Error:", error);
    return Response.json({ error: "Failed to delete image" }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}

