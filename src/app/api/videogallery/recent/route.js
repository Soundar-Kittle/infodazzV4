
// app/api/video/recent/route.js
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT video_id, title, thumbnail_url, order_index, status 
      FROM videos 
      WHERE status = 1 
      ORDER BY order_index ASC
    `);

    return NextResponse.json(rows);
  } catch (err) {
    console.error("Error loading videos:", err);
    return NextResponse.json({ message: "Failed to fetch videos" }, { status: 500 });
  }
}
