import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { hash } from "bcryptjs";

export async function POST(req) {
  const { email, token, password } = await req.json();

  if (!email || !token || !password) {
    return NextResponse.json({ message: "Missing data" }, { status: 400 });
  }

  const connection = await pool.getConnection();
  const [users] = await connection.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (users.length === 0) {
    connection.release();
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const user = users[0];
  const tokenExpired = new Date(user.reset_token_expiry) < new Date();

  if (user.reset_token !== token || tokenExpired) {
    connection.release();
    return NextResponse.json(
      { message: "Invalid or expired token" },
      { status: 400 }
    );
  }

  const hashedPassword = await hash(password, 10);
  await connection.execute(
    "UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE email = ?",
    [hashedPassword, email]
  );
  connection.release();

  return NextResponse.json({ message: "Password updated successfully" });
}
