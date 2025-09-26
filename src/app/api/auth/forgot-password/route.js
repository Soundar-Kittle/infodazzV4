import { NextResponse } from "next/server";
import pool from "@/lib/db";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
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
  const token = crypto.randomBytes(32).toString("hex");
  const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  await connection.execute(
    "UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE id = ?",
    [token, expiry, user.id]
  );
  // 🟡 Get mail settings from DB
  const [settingsRows] = await connection.execute(`SELECT * FROM settings`);
  connection.release();

  const getSetting = (key) =>
    settingsRows.find((row) => row.settings_name === key)?.settings_value ||
    null;

  const mailSettings = {
    name: getSetting("name") || process.env.EMAIL_APP_NAME || "Infodazz",
    user: getSetting("app_email") || process.env.EMAIL_USER,
    pass: getSetting("app_password") || process.env.EMAIL_PASS,
    logo: getSetting("logo") || null,
  };

  console.log("mail :", mailSettings);

  const resetLink = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}&email=${email}`;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    // auth: {
    //   user: process.env.EMAIL_USER,
    //   pass: process.env.EMAIL_PASS,
    // },
    auth: {
      user: mailSettings.user,
      pass: mailSettings.pass,
    },
  });

  await transporter.sendMail({
    from: `${mailSettings.name} <${mailSettings.user}>`,
    to: email,
    subject: "Password Reset",
    html: `
      <div style="background-color:#f4f4f7;padding:40px 20px;font-family:sans-serif;text-align:center;">       
        <div style="background:white;max-width:500px;margin:auto;padding:30px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
           ${
             mailSettings.logo
               ? `<img src="${process.env.NEXTAUTH_URL}${mailSettings.logo}" alt="${mailSettings.name}" style="height:60px;margin-bottom:20px;" />`
               : `<h1 style="color:#333;">${mailSettings.name}</h1>`
           }  
          <p style="color:#555;font-size:16px;">We received a request to reset your password. Click the button below to continue:</p>
  
          <a href="${resetLink}" style="
            display:inline-block;
            margin-top:20px;
            padding:12px 24px;
            background-color: #0f1e38;
            color:white;
            text-decoration:none;
            border-radius:6px;
            font-weight:bold;
            font-size:16px;
          ">
            Reset Password
          </a>
  
          <p style="margin-top:30px;color:#888;font-size:14px;">
            If you didn’t request this, you can safely ignore this email.
          </p>
        </div>
  
        <p style="margin-top:40px;color:#aaa;font-size:13px;">&copy; ${new Date().getFullYear()} ${
      mailSettings.name
    }. All rights reserved.</p>
      </div>
    `,
  });

  return NextResponse.json({
    message: "Reset link sent to your email. It is valid for 10 only minutes.",
  });
}
