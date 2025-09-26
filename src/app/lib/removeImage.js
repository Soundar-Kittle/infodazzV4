import fs from "fs";
import path from "path";

export const removeImage = function (imageUrl) {
  try {
    if (!imageUrl || typeof imageUrl !== "string") return;

    const relativePath = imageUrl.replace("/api/", "");
    const fullPath = path.join(process.cwd(), relativePath);

    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log("🗑️ Deleted file:", fullPath);
    }
  } catch (err) {
    console.warn("⚠️ Failed to delete file:", imageUrl, err);
  }
};
