import pool from "@/lib/db";
import { handleFileUploads } from "@/lib/fileUpload";
import { cleanData } from "@/lib/utils";

export async function POST(req) {
  let connection;

  try {
    const formData = await req.formData();
    const body = Object.fromEntries(formData.entries());
    const cleaned = cleanData(body);
    const uploadedFiles = await handleFileUploads(formData);

    connection = await pool.getConnection();
    await connection.beginTransaction();

    // --- Extract normalized fields
    const globalMobiles = JSON.parse(cleaned.global_mobile || "[]");
    const branchMobiles = JSON.parse(cleaned.branch_mobile || "[]");
    const globalAddresses = JSON.parse(cleaned.global_address || "[]");
    const branchAddresses = JSON.parse(cleaned.branch_address || "[]");

    // --- Clean from regular settings save
    delete cleaned.global_mobile;
    delete cleaned.branch_mobile;
    delete cleaned.global_address;
    delete cleaned.branch_address;

    // --- Save remaining settings
    for (const [key, value] of Object.entries(cleaned)) {
      if (key === "folder") continue;

      let stringValue = value;
      try {
        const parsed = JSON.parse(value);
        if (typeof parsed === "object") stringValue = JSON.stringify(parsed);
      } catch (_) {}

      const [existing] = await connection.query(
        `SELECT id FROM settings WHERE settings_name = ?`,
        [key]
      );

      if (existing.length > 0) {
        await connection.query(
          `UPDATE settings SET settings_value = ? WHERE settings_name = ?`,
          [stringValue, key]
        );
      } else {
        await connection.query(
          `INSERT INTO settings (settings_name, settings_value) VALUES (?, ?)`,
          [key, stringValue]
        );
      }
    }

    // --- Save uploaded files
    for (const [key, filePath] of Object.entries(uploadedFiles)) {
      if (!filePath) continue;

      const [existing] = await connection.query(
        `SELECT id FROM settings WHERE settings_name = ?`,
        [key]
      );

      if (existing.length > 0) {
        await connection.query(
          `UPDATE settings SET settings_value = ? WHERE settings_name = ?`,
          [filePath, key]
        );
      } else {
        await connection.query(
          `INSERT INTO settings (settings_name, settings_value) VALUES (?, ?)`,
          [key, filePath]
        );
      }
    }

    // --- Clear existing rows before insert (optional logic: can use UPSERT logic too)
    await connection.query(`DELETE FROM mobile_numbers`);
    await connection.query(`DELETE FROM addresses`);

    // --- Insert Global Mobile Numbers
    for (const { value, is_active } of globalMobiles) {
      await connection.query(
        `INSERT INTO mobile_numbers (number, is_active, branch_id) VALUES (?, ?, NULL)`,
        [value, is_active]
      );
    }

    // --- Insert Branch Mobile Numbers
    for (const { value, is_active, branch_number } of branchMobiles) {
      let [branchRow] = await connection.query(
        `SELECT id FROM branches WHERE branch_number = ? LIMIT 1`,
        [branch_number]
      );

      let branchId = branchRow.length ? branchRow[0].id : null;

      await connection.query(
        `INSERT INTO mobile_numbers (number, is_active, branch_id) VALUES (?, ?, ?)`,
        [value, is_active, branchId]
      );
    }

    // --- Insert Global Addresses
    for (const address of globalAddresses) {
      const { address_line, city, state, country, pincode, is_active } = address;
      await connection.query(
        `INSERT INTO addresses (address_line, city, state, country, pincode, is_active, branch_id)
         VALUES (?, ?, ?, ?, ?, ?, NULL)`,
        [address_line, city, state, country, pincode, is_active]
      );
    }

    // --- Insert Branch Addresses
    for (const address of branchAddresses) {
      const { branch_number, address_line, city, state, country, pincode, is_active } = address;

      let [branchRow] = await connection.query(
        `SELECT id FROM branches WHERE branch_number = ? LIMIT 1`,
        [branch_number]
      );
      let branchId = branchRow.length ? branchRow[0].id : null;

      await connection.query(
        `INSERT INTO addresses (address_line, city, state, country, pincode, is_active, branch_id)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [address_line, city, state, country, pincode, is_active, branchId]
      );
    }

    await connection.commit();
    return Response.json({ message: "Settings saved successfully" }, { status: 200 });

  } catch (err) {
    if (connection) await connection.rollback();
    console.error("❌ Error saving settings:", err);
    return Response.json({ error: "Save failed", details: err.message }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}

export async function GET(req) {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM settings");
    connection.release();

    return Response.json({ rows }, { status: 200 });
  } catch (err) {
    console.error("❌ Error fetching settings:", err);
    return Response.json({ error: "Fetch failed", details: err.message }, { status: 500 });
  }
}