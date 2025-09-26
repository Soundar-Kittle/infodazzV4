import  db  from "@/lib/db"; // replace with your actual DB connector (e.g., mysql2/promise)
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!Array.isArray(body.reordered)) {
      return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
    }

    const connection = await db.getConnection();
    await connection.beginTransaction();

for (const item of body.reordered) {
  await connection.query(
    `UPDATE videos SET  order_index = ? WHERE id = ?`, // or video_id
    [item.display_order, item.id]
  );
}

    await connection.commit();
    connection.release();

    return NextResponse.json({ message: "Order updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating video order:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
