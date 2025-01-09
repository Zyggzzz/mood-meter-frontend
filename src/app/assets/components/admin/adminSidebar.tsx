import { ChartColumnIncreasing, LayoutDashboard, Settings } from "lucide-react";
import Link from "next/link";

export default function AdminSidebar(props: { active: string }) {
  return (
    <aside className="h-[calc(100vh-4.5rem)] w-52 bg-whiteBg px-2 py-5 text-lg font-bold text-blackPrimary shadow-lg">
      <nav className="flex flex-col">
        <Link
          href={"/admin/dashboard"}
          className={`group flex items-center gap-x-4 p-4 transition-colors ease-in-out hover:text-purpleAccent ${props.active === "dashboard" ? "text-purpleAccent" : ""}`}
        >
          <LayoutDashboard />
          Dashboard
        </Link>
        <Link
          href={"/admin/graphs"}
          className="group flex items-center gap-x-4 p-4 transition-colors ease-in-out hover:text-purpleAccent"
        >
          <ChartColumnIncreasing />
          Grafieken
        </Link>
        <Link
          href={"/admin/settings"}
          className="group flex items-center gap-x-4 p-4 transition-colors ease-in-out hover:text-purpleAccent"
        >
          <Settings />
          Instellingen
        </Link>
      </nav>
    </aside>
  );
}
