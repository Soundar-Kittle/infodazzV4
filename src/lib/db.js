// // lib/db.js
// import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10, // adjust based on your needs
//   queueLimit: 0,
// });

// export default pool;

// import mysql from 'mysql2/promise';

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user:process.env.DB_USER,
//   password:process.env.DB_PASSWORD,
//   database:process.env.DB_NAME
// });

// export default connection;

// import mysql from "mysql2/promise";

// export async function connectDB() {
//   return await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   });
// }

import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT, 10) || 20,
  queueLimit: 0,
});

export default pool;
