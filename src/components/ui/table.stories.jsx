import * as React from "react";
import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import { Button } from "./button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const meta = {
  title: "UI/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

function SortIcon({ direction }) {
  if (direction === "asc") return <ArrowUp className="ml-2 size-4" />;
  if (direction === "desc") return <ArrowDown className="ml-2 size-4" />;
  return <ChevronsUpDown className="ml-2 size-4 opacity-70" />;
}

const invoices = [
  { id: "001", status: "Paid", method: "Card", amount: "$250.00" },
  { id: "002", status: "Pending", method: "PayPal", amount: "$120.00" },
  { id: "003", status: "Unpaid", method: "Bank", amount: "$350.00" },
];

export const Default = {
  render: () => (
    <div className="w-full max-w-3xl">
      <Table>
        <TableCaption>A list of recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.id}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell className="text-right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

export const WithFooter = {
  render: () => (
    <div className="w-full max-w-3xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead className="text-right">Qty</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Notebook</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell className="text-right">$12.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pen</TableCell>
            <TableCell className="text-right">5</TableCell>
            <TableCell className="text-right">$7.50</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right">$19.50</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
};

export const NoData = {
  render: () => (
    <div className="w-full max-w-3xl">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell colSpan={4}>No data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

export const StripedRows = {
  render: () => (
    <div className="w-full max-w-3xl">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="w-16">No.</TableHead>
            <TableHead>구분</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>이름</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5].map((i) => (
            <TableRow
              key={i}
              className={
                i % 2 === 0 ? "bg-muted/30 hover:bg-muted/40" : undefined
              }
            >
              <TableCell className="text-muted-foreground">3456</TableCell>
              <TableCell>엑스트라</TableCell>
              <TableCell>일이</TableCell>
              <TableCell>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-muted-foreground">
                    호칭 · 애칭
                  </span>
                  <span className="font-medium">이름 텍스트가 길 때…</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

/* ─── TanStack Table + 정렬 (shadcn Data Table 문서와 동일한 흐름) ─── */

const paymentData = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
];

const paymentColumns = [
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3 h-8 hover:bg-transparent"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
        <SortIcon direction={column.getIsSorted()} />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="capitalize">{row.getValue("status")}</span>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3 h-8 hover:bg-transparent"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <SortIcon direction={column.getIsSorted()} />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="lowercase">{row.getValue("email")}</span>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <div className="text-right">
        <Button
          variant="ghost"
          className="-mr-3 h-8 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <SortIcon direction={column.getIsSorted()} />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const amount = Number(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

function DataTableSortableExample() {
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data: paymentData,
    columns: paymentColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full max-w-3xl">
      <p className="mb-2 text-sm text-muted-foreground">
        헤더의 Status / Email / Amount 를 누르면 정렬됩니다. (
        <a
          className="underline underline-offset-4"
          href="https://ui.shadcn.com/docs/components/base/data-table"
          target="_blank"
          rel="noreferrer"
        >
          shadcn Data Table
        </a>
        의 getSortedRowModel 패턴)
      </p>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={paymentColumns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export const DataTableWithSorting = {
  render: () => <DataTableSortableExample />,
};
