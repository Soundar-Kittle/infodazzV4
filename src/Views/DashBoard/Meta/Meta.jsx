"use client";

import { DataTable } from "@/components/ui/DataTableNew";

import AddMeta from "./AddMeta";
import { deleteMeta, getMetas } from "@/Services/Meta/ApiMeta";

const Meta = () => {
  const columns = [
    {
      header: "Reference Type",
      accessorKey: "reference_type",
    },
    {
      header: "Reference URL",
      accessorKey: "reference_id",
    },
  ];

  return (
    <>
      <AddMeta />

      <DataTable
        title="Manage Meta"
        fetchData={getMetas}
        columnsConfig={columns}
        tag="metas"
        onDelete={deleteMeta}
        EditComponent={AddMeta}
        refresh
      />
    </>
  );
};

export default Meta;
