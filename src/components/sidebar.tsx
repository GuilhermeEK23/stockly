"use client";

import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white">
      {/* LOGO */}
      <div className="px-8 py-6">
        <p className="text-2xl font-bold">STOCKLY</p>
      </div>
      {/* BOTÕES */}
      <div className="flex flex-col gap-2 p-2">
        <Button
          variant={pathname === "/" ? "secondary" : "ghost"}
          className="justify-start"
          asChild
        >
          <Link href="/">
            <LayoutGridIcon size={20} />
            Dashboard
          </Link>
        </Button>
        <Button
          variant={pathname === "/products" ? "secondary" : "ghost"}
          className="justify-start"
          asChild
        >
          <Link href="/products">
            <PackageIcon size={20} />
            Produtos
          </Link>
        </Button>
        <Button
          variant={pathname === "/sales" ? "secondary" : "ghost"}
          className="justify-start"
          asChild
        >
          <Link href="/sales">
            <ShoppingBasketIcon size={20} />
            Vendas
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
