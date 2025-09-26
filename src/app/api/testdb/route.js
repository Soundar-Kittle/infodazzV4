// import pool from "../../lib/db";

// export async function GET(req) {
//   try {
//     const connection = await pool.getConnection();
//     const [rows] = await connection.query("SELECT NOW() AS now");
//     connection.release();

//     return Response.json({ success: true, serverTime: rows[0].now });
//   } catch (err) {
//     console.error("❌ DB connection failed:", err);
//     return new Response(JSON.stringify({ success: false, error: "Database not connected" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

import { connectDB } from "@/app/lib/db";

export async function GET() {
  try {
    const connection = await connectDB(); 
    const [rows] = await connection.query("SELECT NOW() AS now");
    await connection.end();
    return Response.json({ success: true, serverTime: rows[0].now });
  } catch (err) {
    console.log("❌ Db Connection Failed:", err);
    return new Response(json.stingify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
