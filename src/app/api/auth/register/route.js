import { hash } from "bcryptjs";
import pool from "@/lib/db";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // ✅ Validate Input
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // ✅ Check if the email is already in use
    const connection = await pool.getConnection();
    const [existingUser] = await connection.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      connection.release();
      return new Response(
        JSON.stringify({ message: "Email already registered." }),
        { status: 409 } // Conflict error
      );
    }

    // ✅ Hash the password and store the user
    const hashedPassword = await hash(password, 10);
    await connection.execute(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashedPassword]
    );

    connection.release();

    return new Response(
      JSON.stringify({ message: "User registered successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return new Response(
      JSON.stringify({
        message: "Something went wrong. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
