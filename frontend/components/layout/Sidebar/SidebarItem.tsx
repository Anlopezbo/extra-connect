"use client";

import Link from "next/link";
import { SidebarItemType } from "./types";
import { cn } from "@/lib/utils";

interface Props {
  item: SidebarItemType;
  active?: boolean;
}

export default function SidebarItem({
  item,
  active = false,
}: Props) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
        active
          ? "bg-blue-700 text-white shadow-lg"
          : "text-blue-100 hover:bg-blue-800/60 hover:text-white"
      )}
    >
      <Icon
        size={20}
        className={cn(
          "transition-transform duration-200 group-hover:scale-110",
          active && "text-white"
        )}
      />

      <span className="text-[15px] font-medium">
        {item.label}
      </span>
    </Link>
  );
}