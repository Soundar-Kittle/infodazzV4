import Providers from "@/context/provider";

export default function Layout({ children }) {
  return <Providers>{children}</Providers>;
}

export const generateMetadata = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/settings`, {
    cache: "no-store",
  });

  const data = await res.json();
  const settingsArray = data?.rows || [];

  // Convert settings array to key-value object
  const settings = settingsArray.reduce((acc, curr) => {
    acc[curr.settings_name] = curr.settings_value;
    return acc;
  }, {});

  const iconUrl = settings?.icon || "/icon/favicon.ico";

  // Get file extension
  const extension = iconUrl.split(".").pop()?.toLowerCase();

  // Determine MIME type based on extension
  const mimeTypes = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    webp: "image/webp",
    ico: "image/x-icon",
  };

  const mimeType = mimeTypes[extension ?? ""] || "image/png";

  return {
    title: settings?.name || "Infodazz",

    icons: {
      icon: [
        {
          url: iconUrl,
          type: mimeType,
        },
      ],
    },
  };
};
