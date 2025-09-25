const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* LOGO */}
      <div className="px-8 py-6">
        <p className="text-2xl font-bold">STOCKLY</p>
      </div>
      {/* BOTÕES */}
      <div className="flex flex-col gap-2 p-2">
        <button className="gap-2 px-6 py-3">Dashboard</button>
        <button className="gap-2 px-6 py-3">Prdutos</button>
        <button className="gap-2 px-6 py-3">Vendas</button>
      </div>
    </div>
  );
};

export default Sidebar;
