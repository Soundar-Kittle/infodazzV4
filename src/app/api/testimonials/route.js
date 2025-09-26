import pool from "@/lib/db";
import { handleFileUploads } from "@/lib/fileUpload";
import { cleanData } from "@/lib/utils";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  let pageIndex = parseInt(searchParams.get("pageIndex")) || 0;
  let pageSize = parseInt(searchParams.get("pageSize")) || 10;
  const offset = pageIndex * pageSize;

  const filters = searchParams.get("filters");

  let name = "";
  let rating = null;

  if (filters) {
    try {
      const parsedFilters = JSON.parse(filters);
      name = parsedFilters.name || "";
      rating = parsedFilters.rating || null;
    } catch (error) {
      return Response.json(
        { message: "Invalid filters format. Please provide valid JSON." },
        { status: 400 }
      );
    }
  }

  try {
    let baseQuery = `
      SELECT 
        rt.id,
        rt.name,
        rt.designation,
        rt.rating,
        rt.image,
        rt.description,
        rt.visibility,
        rt.status,
        DATE_FORMAT(rt.created_at, '%Y-%m-%d') as created_at
      FROM review_testimonial rt
      WHERE 1 = 1
    `;

    let countQuery = `SELECT COUNT(*) as count FROM review_testimonial rt WHERE 1 = 1`;

    const queryParams = [];
    const countParams = [];

    if (name) {
      const wildcard = `%${name}%`;
      baseQuery += ` AND rt.name LIKE ?`;
      countQuery += ` AND rt.name LIKE ?`;
      queryParams.push(wildcard);
      countParams.push(wildcard);
    }

    if (rating !== null) {
      baseQuery += ` AND rt.rating = ?`;
      countQuery += ` AND rt.rating = ?`;
      queryParams.push(rating);
      countParams.push(rating);
    }

    baseQuery += ` ORDER BY rt.id DESC LIMIT ? OFFSET ?`;
    queryParams.push(pageSize, offset);

    const [rows] = await pool.query(baseQuery, queryParams);
    const [countResult] = await pool.query(countQuery, countParams);
    const rowCount = countResult[0]?.count || 0;

    return Response.json({ rows, rowCount }, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching testimonials:", error);
    return Response.json(
      {
        message: "Failed to fetch testimonials",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

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
      show_rating: cleanedData.show_rating == "false" ? 0 : 1,
      show_description: cleanedData.show_description == "false" ? 0 : 1,
      show_designation: cleanedData.show_designation == "false" ? 0 : 1,
      show_image: cleanedData.show_image == "false" ? 0 : 1,
      show_product: cleanedData.show_product == "false" ? 0 : 1,
    };

    const [result] = await connection.query(
      `INSERT INTO review_testimonial
      ( name, designation, image, description, rating, visibility, status)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        cleanedData.name,
        cleanedData.designation || null,
        uploadedFiles.image || null,
        cleanedData.description || null,
        cleanedData.rating || 5,
        JSON.stringify(visibility),
        cleanedData.status || 1,
      ]
    );

    await connection.commit();
    return Response.json(
      { message: "Testimonial added successfully", id: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Testimonial Add Error:", error);
    return Response.json(
      { error: "Failed to add testimonial", details: error.message },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}

export async function DELETE(req) {
  const body = await req.json();
  const { id } = body;

  if (!id) {
    return Response.json({ error: "Missing testimonial ID" }, { status: 400 });
  }

  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    await connection.query(`DELETE FROM review_testimonial WHERE id = ?`, [id]);

    await connection.commit();
    return Response.json(
      { message: "Testimonial deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Delete Testimonial Error:", error);
    return Response.json(
      { error: "Failed to delete testimonial" },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
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
      return Response.json(
        { error: "Missing testimonial ID" },
        { status: 400 }
      );
    }

    const visibility = {
      show_rating: cleanedData.show_rating == "false" ? 0 : 1,
      show_description: cleanedData.show_description == "false" ? 0 : 1,
      show_designation: cleanedData.show_designation == "false" ? 0 : 1,
      show_image: cleanedData.show_image == "false" ? 0 : 1,
      show_product: cleanedData.show_product == "false" ? 0 : 1,
    };

    const [update] = await connection.query(
      `UPDATE review_testimonial
       SET 
         name = ?, 
         designation = ?, 
         image = ?, 
         description = ?, 
         rating = ?, 
         visibility = ?, 
         status = ?
       WHERE id = ?`,
      [
        cleanedData.name,
        cleanedData.designation || null,
        uploadedFiles.image || cleanedData.image || null,
        cleanedData.description || null,
        cleanedData.rating || 5,
        JSON.stringify(visibility),
        cleanedData.status || 1,
        cleanedData.id,
      ]
    );

    await connection.commit();
    return Response.json(
      { message: "Testimonial updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("❌ Testimonial Edit Error:", error);
    return Response.json(
      { error: "Failed to update testimonial", details: error.message },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}
