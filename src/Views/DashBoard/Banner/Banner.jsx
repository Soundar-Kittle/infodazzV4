"use client";

import { DataTable } from "@/components/ui/DataTableNew";
import { deleteBanner, getBanners } from "@/Services/Banner/ApiBanner";
import AddBanner from "./AddBanner";
import { useModal } from "@/context/ModalProvider";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Banner = () => {
  const { openModal } = useModal();
  const handleClick = (url) => {
    openModal(
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src={url}
          alt="Testimonial"
          width={600}
          height={600}
          className="max-h-fit object-contain"
          loading="lazy"
        />
      </div>
    );
  };
  const columns = [
    {
      header: "Image",
      cell: (info) =>
        info.row.original.image ? (
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
            onClick={() => handleClick(info.row.original.image)}
          >
            <span className="sr-only">Open menu</span>
            <Image
              src={info.row.original.image}
              alt="Banner"
              width={50}
              height={50}
              className="rounded"
              loading="lazy"
            />
          </Button>
        ) : (
          "No Image"
        ),
    },
    {
      header: "Title",
      accessorKey: "title",
      cell: (info) => info.getValue() || "N/A",
    },
    {
      header: "Button Link",
      accessorKey: "button_link",
      cell: (info) =>
        info.getValue() ? (
          <a
            href={`/${info.getValue()}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        ) : (
          "N/A"
        ),
    },

    {
      header: "Content",
      accessorKey: "visibility.show_content",
      cell: ({ row }) =>
        row.original.visibility?.show_content === 1 ? "Visible" : "Hidden",
    },
    {
      header: "Button",
      accessorKey: "visibility.show_button",
      cell: ({ row }) =>
        row.original.visibility?.show_button === 1 ? "Visible" : "Hidden",
    },

    {
      header: "Alignment",
      accessorKey: "alignment",
      cell: (info) => {
        const alignmentMap = {
          0: "Center",
          1: "Left",
          2: "Right",
        };
        return alignmentMap[info.getValue()] || "Unknown";
      },
    },
    {
      header: "Description",
      accessorKey: "description",
      cell: (info) => info.getValue() || "N/A",
    },
  ];

  return (
    <>
      <AddBanner />

      <DataTable
        title="Manage Banners"
        fetchData={getBanners}
        columnsConfig={columns}
        tag="banner"
        onDelete={deleteBanner}
        EditComponent={AddBanner}
        refresh
      />
    </>
  );
};

export default Banner;
