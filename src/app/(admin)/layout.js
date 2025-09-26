import { AppSidebar } from "@/components/Back-End/Sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Providers from "@/context/provider";

export default function Layout({ children }) {
  return (
    <Providers>
      <SidebarProvider className="relative">
        <AppSidebar />
        <div className="flex flex-col w-full h-auto">
          <div className="sticky top-0 p-3 shadow z-40 bg-white">
            <SidebarTrigger />
          </div>
          <main className="z-0 overflow-y-auto min-h-screen p-3">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </Providers>
  );
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
