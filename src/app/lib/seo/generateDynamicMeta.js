import { getAllMetas } from "@/Services/Meta/ApiMeta";

const normalizeSlug = (slug) =>
  Array.isArray(slug) ? slug.join("/") : slug ?? "";

export const generateDynamicMeta = async (slug) => {
  try {
    // Fetch global settings
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/settings`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();
    const settingsArray = data?.rows || [];

    const settings = settingsArray.reduce((acc, curr) => {
      acc[curr.settings_name] = curr.settings_value;
      return acc;
    }, {});

    // Normalize slug
    slug = normalizeSlug(slug);

    // Fetch all metas
    const metaResponse = await getAllMetas();
    const allMetas = metaResponse?.rows || [];

    // Match meta for the slug
    const matchedMeta = allMetas.find((meta) => meta.reference_id === slug);

    // Fallback values
    const siteName = settings?.name || "Infodazz";
    const fallbackTitle = siteName;
    const fallbackDesc = `Explore ${siteName}`;
    const fallbackImage = settings?.logo || "";

    const metadata = {
      title: `${fallbackTitle} | ${siteName}`,
      description: fallbackDesc,
      openGraph: {
        title: `${fallbackTitle} | ${siteName}`,
        description: fallbackDesc,
        images: fallbackImage ? [{ url: fallbackImage }] : [],
      },
      twitter: {
        title: `${fallbackTitle} | ${siteName}`,
        description: fallbackDesc,
      },
    };

    // Meta override logic
    if (matchedMeta?.metas?.length > 0) {
      matchedMeta.metas.forEach((m) => {
        const value = m.is_content ? m.content : m.image;
        if (!value) return;

        switch (m.attribute_scope) {
          case "general":
            if (m.attribute_key === "title") {
              metadata.title = `${value} | ${siteName}`;
            } else if (m.attribute_key === "description") {
              metadata.description = value;
            }
            break;

          case "og":
            if (m.attribute_key === "image") {
              metadata.openGraph.images = [{ url: value }];
            } else {
              metadata.openGraph[m.attribute_key] = value;
            }
            break;

          case "twitter":
            if (m.attribute_key === "image") {
              metadata.twitter.image = value;
            } else {
              metadata.twitter[m.attribute_key] = value;
            }
            break;
        }
      });

      // Fallbacks if not overridden
      metadata.openGraph.title ??= metadata.title;
      metadata.openGraph.description ??= metadata.description;
      metadata.twitter.title ??= metadata.title;
      metadata.twitter.description ??= metadata.description;

      if (!metadata.openGraph.images?.length && fallbackImage) {
        metadata.openGraph.images = [{ url: fallbackImage }];
      }

      if (!metadata.twitter.image && fallbackImage) {
        metadata.twitter.image = fallbackImage;
      }
    }

    // Icon handling
    const iconUrl = settings?.icon || "/icon/favicon.ico";
    const extension = iconUrl.split(".").pop()?.toLowerCase();

    const mimeTypes = {
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      webp: "image/webp",
      ico: "image/x-icon",
    };

    const mimeType = mimeTypes[extension] || "image/png";

    metadata.icons = {
      icon: [{ url: iconUrl, type: mimeType }],
    };

    // Base URL
    metadata.metadataBase = new URL(
      settings?.website || "https://infodazz.org"
    );

    return metadata;
  } catch (error) {
    console.error("Error generating metadata for slug:", slug, error);
    return {
      title: "Infodazz",
      description: "Explore Infodazz",
    };
  }
};
