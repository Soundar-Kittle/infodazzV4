// "use client";

// import { DataTable } from "@/components/ui/DataTableNew";
// import { deleteGallery, getGallery } from "@/Services/Gallery/ApiGallery";
// import AddGallery from "./AddGallery";
// import { reorderGallery } from "@/Services/Gallery/ApiGallery";
// import { useModal } from "@/context/ModalProvider";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// const Gallery = () => {
//   const { openModal } = useModal();

//   const handleSort = async (sortedRows) => {
//   const orderPayload = sortedRows.map((row, index) => ({
//     id: row.id,
//     display_order: index,
//   }));

//   await reorderGallery(orderPayload);
// };


//   const handleClick = (url) => {
//     openModal(
//       <div className="w-full h-full flex justify-center items-center">
//         <Image
//           src={url}
//           alt="Gallery"
//           width={600}
//           height={600}
//           className="max-h-fit object-contain"
//           loading="lazy"
//         />
//       </div>
//     );
//   };

//   const columns = [
//     {
//       header: "Image",
//       cell: (info) =>
//         info.row.original.image_path ? (
//           <Button
//             variant="ghost"
//             className="h-8 w-8 p-0"
//             onClick={() => handleClick(info.row.original.image_path)}
//           >
//             <span className="sr-only">Open Image</span>
//             <Image
//               src={info.row.original.image_path}
//               alt="Gallery"
//               width={50}
//               height={50}
//               className="rounded"
//               loading="lazy"
//             />
//           </Button>
//         ) : (
//           "No Image"
//         ),
//     },
//     {
//       header: "Order",
//       accessorKey: "display_order",
//       cell: (info) => info.getValue() ?? "0",
//     },
//     {
//       header: "Status",
//       accessorKey: "is_active",
//       cell: (info) =>
//         info.getValue() === 1 ? "Active" : "Inactive",
//     },
//     {
//       header: "Created At",
//       accessorKey: "created_at",
//       cell: (info) => info.getValue() || "—",
//     },
//   ];

//   return (
//     <>
//       <AddGallery/>

//       <DataTable
//         title="Manage Gallery"
//         fetchData={getGallery}
//         columnsConfig={columns}
//         tag="gallery"
//         onDelete={deleteGallery}
//         EditComponent={AddGallery}
//         refresh
//       />
//     </>
//   );
// };

// export default Gallery;


"use client";

import React from "react";
import { DataTable } from "@/components/ui/DataTableNew";
import { deleteGallery, getGallery } from "@/Services/Gallery/ApiGallery";
import AddGallery from "./AddGallery";
import { reorderGallery } from "@/Services/Gallery/ApiGallery";
import { useModal } from "@/context/ModalProvider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { arrayMove,useSortable } from "@dnd-kit/sortable";

const Gallery = () => {
  const { openModal } = useModal();
  const [sortedRows, setSortedRows] = React.useState([]);
  const sensors = useSensors(useSensor(PointerSensor));
  
  function SortableRow({ row, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: row.id, // Use row.id as a unique identifier
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableRow ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </TableRow>
  );
}

  // DnD handler to send updated order to backend
  const handleSort = async (event) => {
    const updatedRows = arrayMove(sortedRows, event.oldIndex, event.newIndex);
    setSortedRows(updatedRows); // Update UI locally first

    const orderPayload = updatedRows.map((row, index) => ({
      id: row.id, // Make sure to map this correctly to your DB ID
      display_order: index, // Set the new display_order
    }));

    await reorderGallery(orderPayload); // Send the updated order to backend
  };

  // Modal click to view image
  const handleClick = (url) => {
    openModal(
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src={url}
          alt="Gallery"
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
        info.row.original.image_path ? (
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
            onClick={() => handleClick(info.row.original.image_path)}
          >
            <span className="sr-only">Open Image</span>
            <Image
              src={info.row.original.image_path}
              alt="Gallery"
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
      header: "Order",
      accessorKey: "display_order",
      cell: (info) => info.getValue() ?? "0",
    },
    {
      header: "Status",
      accessorKey: "is_active",
      cell: (info) =>
        info.getValue() === 1 ? "Active" : "Inactive",
    },
    {
      header: "Created At",
      accessorKey: "created_at",
      cell: (info) => info.getValue() || "—",
    },
  ];

  return (
    <>
      <AddGallery />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleSort} // Pass in the handleSort function
      >
        <SortableContext
          items={sortedRows}
          strategy={verticalListSortingStrategy}
        >
          <DataTable
            title="Manage Gallery"
            fetchData={getGallery}
            columnsConfig={columns}
            tag="gallery"
            onDelete={deleteGallery}
            EditComponent={AddGallery}
            refresh
            sortable
          />
        </SortableContext>
      </DndContext>
    </>
  );
};

export default Gallery;

