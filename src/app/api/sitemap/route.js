import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const APP_DIR = path.join(process.cwd(), "src", "app");
const validPageFileRegex = /^page\.(js|jsx|ts|tsx)$/;

function getAllRoutes(dirPath, basePath = "") {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const routePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      // Only continue into (client), or if basePath is empty (root)
      if (basePath === "" && entry.name !== "(client)") continue;

      routes = routes.concat(getAllRoutes(fullPath, routePath));
    } else if (validPageFileRegex.test(entry.name)) {
      const cleanedRoute =
        "/" + basePath.replace(/\\/g, "/").replace(/\/page$/, "");

      // ✅ Handle / if it's directly under (client)
      if (cleanedRoute === "/(client)") {
        routes.push("/");
      } else if (cleanedRoute.startsWith("/(client)/")) {
        routes.push(cleanedRoute.replace("/(client)/", ""));
      }
    }
  }

  return routes;
}

export async function GET() {
  try {
    const rawRoutes = getAllRoutes(APP_DIR).filter(
      (url) => url.trim().length > 0 && !url.includes("[")
    );

    const rows = rawRoutes.map((url) => ({
      url,
      label: url === "/" ? "Home" : url.charAt(0).toUpperCase() + url.slice(1),
    }));

    return NextResponse.json({ rows });
  } catch (error) {
    console.error("❌ JSON Sitemap generation failed:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// function getAllRoutes(dirPath, basePath = "") {
//   const entries = fs.readdirSync(dirPath, { withFileTypes: true });
//   let routes = [];

//   for (const entry of entries) {
//     const fullPath = path.join(dirPath, entry.name);
//     const routePath = path.join(basePath, entry.name);

//     if (entry.isDirectory()) {
//       if (["api", "sitemap.xml", "sitemap.json"].includes(entry.name)) continue;
//       routes = routes.concat(getAllRoutes(fullPath, routePath));
//     } else if (validPageFileRegex.test(entry.name)) {
//       const cleanedRoute =
//         "/" + basePath.replace(/\\/g, "/").replace(/\/page$/, "");
//       routes.push(cleanedRoute === "/home" ? "/" : cleanedRoute);
//     }
//   }

//   return routes;
// }

// export async function GET() {
//   try {
//     const routes = getAllRoutes(APP_DIR)
//       .filter((route) => route.startsWith("/(client)/"))
//       .map((route) => route.replace("/(client)/", ""))
//       .filter(
//         (url) => url.trim().length > 0 && url !== "/" && !url.includes("[")
//       )
//       .map((url) => ({ url }));

//     return NextResponse.json({ rows: routes });
//   } catch (error) {
//     console.error("❌ JSON Sitemap generation failed:", error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// }
