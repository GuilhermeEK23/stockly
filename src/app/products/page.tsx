import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { PlusIcon } from "lucide-react";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "@/data-access/product/get-products";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="w-full space-y-8 p-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        {/* ESQUERDA */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-green-500">Produtos</p>
          <h1 className="text-xl font-semibold">Gestão de produtos</h1>
        </div>

        {/* DIREITA */}
        <Button className="gap-2">
          <PlusIcon size={16} />
          Novo Produto
        </Button>
      </div>

      {/* TABELA DE PRODUTOS */}
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
