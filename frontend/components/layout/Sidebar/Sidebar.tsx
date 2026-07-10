"use client";

import Logo from "@/components/common/Logo";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";
import { sidebarItems } from "./constants";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col bg-[#082C7D] shadow-2xl">

      <div className="flex flex-col items-center border-b border-blue-800 px-6 py-8">

        <Logo width={110} height={110} />

        <h2 className="mt-3 text-3xl font-light text-white">
          Extra Connect
        </h2>

      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">

        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={item.label}
            item={item}
            active={index === 0}
          />
        ))}

      </nav>

      <SidebarFooter />

    </aside>
  );
}