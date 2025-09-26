"use client";

import {
  Home,
  Settings,
  LogOut,
  Network,
  Box,
  Boxes,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  NotepadText,
  RectangleHorizontal,
  ChevronsLeftRight,
  NotepadTextIcon,
  GalleryThumbnails,
  VideoIcon,
} from "lucide-react";

import Image from "next/image";
import { signOut } from "next-auth/react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSettings } from "@/context/SettingsContext";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Banners",
    url: "/dashboard/banner",
    icon: GalleryHorizontal,
  },
  {
    title: "Testimonial",
    url: "/dashboard/testimonial",
    icon: GalleryHorizontalEnd,
  },
  {
    title: "Meta Management",
    url: "/dashboard/meta",
    icon: ChevronsLeftRight,
  },
  {
    title: "Gallery",
    url: "/dashboard/gallery",
    icon: GalleryThumbnails,
  },
  {
    title: "Video Gallery",
    url: "/dashboard/video-gallery",
    icon: VideoIcon,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { settings } = useSettings();
  return (
    <Sidebar className="flex flex-col justify-between bg-primary">
      {/* ✅ Logo at the top */}
      <SidebarHeader className="p-2 flex justify-center bg-primary/10">
        <div className="relative w-full h-[60px]">
          <Image
            src={settings?.logo || "/logo/logo_blue.png"}
            alt="Infodazz Logo"
            fill
            priority
            sizes="(max-width: 768px) 200px, 180px"
            className="object-contain"
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="flex-1  text-primary">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 my-1"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ✅ Logout with confirm modal */}
      <div className="p-4 border-t">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full flex items-center justify-start gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to logout?
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Sidebar>
  );
}
