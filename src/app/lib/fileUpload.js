import fs from "fs";
import path from "path";
import sharp from "sharp";

/**
 * Handles multiple file uploads with WebP image optimization.
 * @param {FormData} formData - The FormData object containing files.
 * @returns {Object} - An object containing arrays of file paths for each field.
 */
// export async function handleFileUploads(formData) {
//   try {
//     const folder = formData.get("folder") || "default";
//     const uploadDir = path.join(process.cwd(), "uploads", folder);

//     // ✅ Ensure the upload directory exists
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir, { recursive: true });
//     }

//     const uploadedFiles = {};

//     for (const [key, value] of formData.entries()) {
//       if (key !== "folder") {
//         const files = formData.getAll(key); // ✅ Get all files (Fixes "File is not defined")

//         for (const file of files) {
//           if (file && typeof file.arrayBuffer === "function") {
//             // ✅ Ensure it's a valid file
//             const fileExt = path.extname(file.name).toLowerCase();
//             const fileName = `${Date.now()}_${path.basename(
//               file.name,
//               fileExt
//             )}.webp`;
//             const filePath = path.join(uploadDir, fileName);

//             const buffer = Buffer.from(await file.arrayBuffer());

//             // ✅ Convert to WebP and save
//             await sharp(buffer).webp().toFile(filePath);

//             // ✅ Store file paths in an array
//             if (!uploadedFiles[key]) {
//               uploadedFiles[key] = [];
//             }
//             uploadedFiles[key].push(`/api/uploads/${folder}/${fileName}`);
//           }
//         }
//       }
//     }

//     return uploadedFiles;
//   } catch (error) {
//     console.error("❌ File Upload Error:", error);
//     return { error: "File upload failed" };
//   }
// }

export async function handleFileUploads(formData) {
  try {
    const folder = formData.get("folder") || "default";
    const uploadDir = path.join(process.cwd(), "uploads", folder);

    // ✅ Ensure the upload directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const uploadedFiles = {};

    // ✅ Fix: loop each key only once to avoid duplicates
    for (const key of new Set(formData.keys())) {
      if (key === "folder") continue;

      const files = formData.getAll(key);

      for (const file of files) {
        if (file && typeof file.arrayBuffer === "function") {
          const fileExt = path.extname(file.name).toLowerCase();
          const fileName = `${Date.now()}_${path.basename(
            file.name,
            fileExt
          )}.webp`;
          const filePath = path.join(uploadDir, fileName);

          const buffer = Buffer.from(await file.arrayBuffer());

          await sharp(buffer).webp().toFile(filePath);

          if (!uploadedFiles[key]) {
            uploadedFiles[key] = [];
          }
          uploadedFiles[key].push(`/api/uploads/${folder}/${fileName}`);
        }
      }
    }

    return uploadedFiles;
  } catch (error) {
    console.error("❌ File Upload Error:", error);
    return { error: "File upload failed" };
  }
}
