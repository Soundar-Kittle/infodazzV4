"use client";
import * as React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
  Loader2,
  MoreHorizontal,
  RefreshCw,
  SquarePen,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/context/ModalProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DataTable({
  title,
  fetchData,
  data = null, // ✅ Add this
  columnsConfig,
  searchFields,
  EditComponent = null,
  onDelete,
  filters,
  onView,
  tag,
  showColumns = true,
  addButton = null,
  refresh = false,
  sortable = false,
  onDragEnd = null,
}) {
  const queryClient = useQueryClient();
  const { openModal, closeModal } = useModal();
  const location = usePathname();

  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // Fetch all data at once
  const {
    data: allData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [tag, filters], // Remove pagination from queryKey
    queryFn: async () => {
      // Fetch all data by setting a large pageSize
      const response = await fetchData(0, 10, filters); // Use a large number to get all data
      return response;
    },
    keepPreviousData: true,
    refetchOnMount: true,
    refetchInterval: 60000,
    staleTime: 0,
    cacheTime: 5 * 60 * 1000,
  });

  // Handle actions (delete, edit) - remain same
  const handleDeleteClick = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await onDelete(id);
        queryClient.invalidateQueries([tag]);
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  const handleEditClick = (row) => {
    openModal(
      <EditComponent
        key={row.original.id}
        type="edit"
        editData={row.original}
        onClose={closeModal}
      />
    );
  };

  // Actions column definition - remains same
  const actionsColumn = {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {onView && (
              <DropdownMenuItem onClick={() => onView(row.original)}>
                View Details
              </DropdownMenuItem>
            )}
            {EditComponent && (
              <DropdownMenuItem onClick={() => handleEditClick(row)}>
                <div className="flex items-center space-x-2">
                  <SquarePen className="text-blue-600" />
                  <span>Edit</span>
                </div>
              </DropdownMenuItem>
            )}
            {onDelete && (
              <DropdownMenuItem
                onClick={() => handleDeleteClick(row.original.id)}
                className="text-red-600"
              >
                <div className="flex items-center space-x-2">
                  <Trash2 className="text-red-600" />
                  <span>Delete</span>
                </div>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  };

  const columns = [...columnsConfig, actionsColumn];

const table = useReactTable({
  data: data || allData?.rows || [],
  columns,
  onSortingChange: setSorting,
  onColumnFiltersChange: setColumnFilters,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onColumnVisibilityChange: setColumnVisibility,
  onPaginationChange: setPagination,
  onRowSelectionChange: setRowSelection,
  manualPagination: false,
  state: {
    pagination,
    sorting,
    columnFilters,
    columnVisibility,
    rowSelection,
  },
});

  
const SortableRow = ({ row, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: row.original.id }); // ✅ match backend ID

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  return (
    <TableRow
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      data-state={row.getIsSelected() && "selected"}
    >
      {children}
    </TableRow>
  );
};

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        {searchFields && (
          <Input
            placeholder={`Search ${searchFields}...`}
            value={table.getColumn(searchFields)?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn(searchFields)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        )}
        <div className="flex items-center justify-end space-x-2">
          {refresh && (
            <Button variant="outline" onClick={() => refetch()}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          )}
          {showColumns && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {/* {column.id} */}
                        {column.columnDef.header}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
      <div className="bg-white pt-0 w-full border border-gray-200 rounded-md overflow-hidden">
        <div className="flex justify-between items-center border-b p-4 bg-primary">
          <h2 className="text-xl font-semibold text-primary-foreground">
            {title}
          </h2>

          {addButton && (
            <Link
              className="px-4 py-2 text-sm rounded-sm bg-primary text-white"
              href={location + "/add"}
            >
              {addButton}
            </Link>
          )}
        </div>
        <div className="p-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} className="font-bold">
                        {header.isPlaceholder ? null : (
                          <div
                            className={
                              header.column.getCanSort()
                                ? "cursor-pointer select-none flex items-center"
                                : ""
                            }
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
             <TableBody>
  {table.getRowModel().rows?.length ? (
    table.getRowModel().rows.map((row) => {
      const rowContent = row.getVisibleCells().map((cell) => (
        <TableCell
          key={cell.id}
          className="max-w-xs whitespace-normal break-words"
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ));

      return sortable ? (
        <SortableRow key={row.id} row={row}>
          {rowContent}
        </SortableRow>
      ) : (
        <TableRow
          key={row.id}
          data-state={row.getIsSelected() && "selected"}
        >
          {rowContent}
        </TableRow>
      );
    })
  ) : (
    <TableRow>
      <TableCell colSpan={columns.length} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  )}
</TableBody>
            </Table>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
            {/* Items Per Page & Total Count */}
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span>Items Per Page:</span>
              <select
                className="border rounded-md px-2 py-1"
                value={pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20, 30, 50].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <span className="text-gray-600">
                Total: {allData?.rows.length || 0} items
              </span>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2 text-sm">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <span>
                Page {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
