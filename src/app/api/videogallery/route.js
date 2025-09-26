// app/api/video/create/route.js
import { NextResponse } from "next/server";
import  db  from "@/lib/db"; // replace with your actual DB connector (e.g., mysql2/promise)


export async function POST(req) {
  try {
    const { updatedVideos } = await req.json();

    if (!Array.isArray(updatedVideos)) {
      return NextResponse.json({ message: "Invalid video data" }, { status: 400 });
    }

 for (const [index, video] of updatedVideos.entries()) {
  const videoId = video.id; // ✅ correct
  const title = video.title || "";
  const description = video.description || "";
  const thumbnail = video.thumbnail || "";
  const display_order = video.display_order ?? index;
  const statistics = video.statistics || {};

  const views = statistics.viewCount || 0;
  const likes = statistics.likeCount || 0;
  const comments = statistics.commentCount || 0;

  if (!videoId) {
    console.warn("Skipping video with missing ID:", video);
    continue; // skip invalid entries
  }

  const [existing] = await db.query(
    `SELECT id FROM videos WHERE video_id = ?`,
    [videoId]
  );

  if (existing.length > 0) {
    await db.query(
      `UPDATE videos SET title = ?, description = ?, thumbnail_url = ?, views = ?, likes = ?, comments = ?, order_index = ? WHERE video_id = ?`,
      [title, description, thumbnail, views, likes, comments, display_order, videoId]
    );
  } else {
    await db.query(
      `INSERT INTO videos (video_id, title, description, thumbnail_url, views, likes, comments, order_index) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [videoId, title, description, thumbnail, views, likes, comments, display_order]
    );
  }
}

    return NextResponse.json({ message: "Videos saved." });
  } catch (err) {
    console.error("Error saving videos:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const [rows] = await db.query(`SELECT * FROM videos ORDER BY order_index ASC`);

    return NextResponse.json({ rows });
  } catch (err) {
    console.error("Error loading videos:", err);
    return NextResponse.json({ message: "Failed to fetch videos" }, { status: 500 });
  }
}
