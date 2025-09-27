"use client";

import { Badge } from "@/components/ui/badge";
import { Product as PrismaProduct } from "@prisma/client";

type Product = PrismaProduct & {
  status: string;
};

import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Em Estoque";
  } else {
    return "Esgotado";
  }
};

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor Unitário",
    cell: ({ row }) => {
      const product = row.original;
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price));
    },
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const product = row.original;
      const label = getStatusLabel(product.status);
      return (
        <Badge
          variant={label === "Em Estoque" ? "default" : "destructive"}
          className={`gap-2 font-semibold ${label === "Em Estoque" ? "bg-green-100 text-green-600" : "bg-slate-200 text-slate-600"}`}
        >
          <CircleIcon
            size={8}
            className={`rounded-full ${label === "Em Estoque" ? "bg-green-500 text-green-500" : "bg-slate-400 text-slate-400"}`}
          />
          {label}
        </Badge>
      );
    },
  },
];
