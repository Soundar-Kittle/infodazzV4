"use client";

import React from "react";
import AddTestimonial from "./AddTesimonial";
import {
  deleteTestimonial,
  getTestimonials,
} from "@/Services/Testimonial/ApiTestimonial";
import { DataTable } from "@/components/ui/DataTableNew";
import { useModal } from "@/context/ModalProvider";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Testimonial = () => {
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
          // loading="lazy"
        />
      </div>
    );
  };
  const columns = [
    {
      header: "Title",
      accessorKey: "name",
      enableHiding: false,
    },
    {
      header: "Image",
      cell: (info) =>
        info.row.original.image ? (
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
            onClick={() => handleClick(info.row.original.image)}
          >
            <span className="sr-only">View Image</span>
            <Image
              src={info.row.original.image}
              alt="testimonial"
              width={50}
              height={50}
              className="rounded"
              // loading="lazy"
            />
          </Button>
        ) : (
          "No Image"
        ),
    },
    {
      header: "Description",
      accessorKey: "description",
      cell: (info) =>
        info.getValue()?.length > 50
          ? info.getValue().slice(0, 50) + "..."
          : info.getValue(),
    },
    // {
    //   header: "Designation",
    //   accessorKey: "designation",
    // },
    // {
    //   header: "Rating",
    //   accessorKey: "rating",
    //   cell: (info) => {
    //     const value = info.getValue();
    //     return value ? `${value} ⭐` : "No Rating";
    //   },
    // },

    // {
    //   header: "Status",
    //   accessorKey: "status",
    //   cell: (info) => (info.getValue() == 1 ? "Active" : "Inactive"),
    // },
  ];

  const searchFields = [
    {
      key: "name",
      type: "text",
      single: false,
    },
    {
      key: "category_name",
      type: "text",
      single: false,
    },
    {
      key: "status",
      type: "select",
    },
  ];

  return (
    <div>
      <AddTestimonial />

      <DataTable
        title="Manage Testimonials"
        fetchData={getTestimonials}
        columnsConfig={columns}
        tag="testimonials"
        searchFields="name"
        onDelete={deleteTestimonial}
        EditComponent={AddTestimonial}
        refresh
      />
    </div>
  );
};

export default Testimonial;
