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

import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/ui/DataTableNew";
import { deleteGallery, getGallery, reorderGallery } from "@/Services/Gallery/ApiGallery";
import AddGallery from "./AddGallery";
import { useModal } from "@/context/ModalProvider";
import { Button } from "@/components/ui/button.jsx";
import Image from "next/image";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";


const Gallery = () => {
  const { openModal } = useModal();
  const [data, setData] = useState([]);
  const sensors = useSensors(useSensor(PointerSensor));

  // const BASE_URL = "https://infodazz.org"; // ✅ set if images are hosted remotely
    const BASE_URL = "https://infodazz.org"; // ✅ set if images are hosted remotely

  const handleClick = (url) => {
    openModal(
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src={url}
          alt="Gallery"
          width={600}
          height={600}
          // className="max-h-fit object-contain"
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
            <img
             src={info.row.original.image_path}
              alt="Gallery"
              // width={50}
              // height={50}
              className="rounded"
              // loading="lazy"
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
      cell: (info) => (info.getValue() === 1 ? "Active" : "Inactive"),
    },
    {
      header: "Created At",
      accessorKey: "created_at",
      cell: (info) => info.getValue() || "—",
    },
  ];

  const fetchData = async () => {
    const response = await getGallery();
    console.log("Gallery Data:", response); // ✅ Fixed: Use 'response'
    const sorted = response.rows.sort((a, b) => a.display_order - b.display_order);
    setData(sorted);
   return { rows: sorted, rowCount: sorted.length };
  };

const handleDragEnd = async (event) => {
  const { active, over } = event;
  if (!over || active.id === over.id) return;

  const oldIndex = data.findIndex((item) => item.id === active.id);
  const newIndex = data.findIndex((item) => item.id === over.id);

  const updated = arrayMove(data, oldIndex, newIndex).map((item, i) => ({
    ...item,
    display_order: i,
  }));

  setData(updated);
  console.log("🔄 Sending reorder payload:", updated);

  await reorderGallery(updated.map(({ id, display_order }) => ({ id, display_order })));
};




  return (
    <>
      <AddGallery />

     <DndContext
  sensors={sensors}
  collisionDetection={closestCenter}
  onDragEnd={handleDragEnd}
>
  <SortableContext
    items={data.map((item) => item.id)}
    strategy={verticalListSortingStrategy}
  >
    <DataTable
      title="Manage Gallery"
      fetchData={fetchData}
      data={data} // ✅ THIS LINE is the fix
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
