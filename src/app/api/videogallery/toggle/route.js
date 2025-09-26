import  db  from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { video_id, status } = await req.json();

    if (!video_id || typeof status === "undefined") {
      return NextResponse.json({ message: "Missing video_id or status" }, { status: 400 });
    }

    await db.query(
      `UPDATE videos SET status = ? WHERE video_id = ?`,
      [status, video_id]
    );

    return NextResponse.json({ message: "Status updated" });
  } catch (err) {
    console.error("Toggle API error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
