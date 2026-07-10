"use client";

import { ChevronDown } from "lucide-react";

export default function SidebarFooter() {
  return (
    <div className="border-t border-blue-800 p-4">

      <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-blue-800 transition">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
          AL
        </div>

        <div className="flex-1 text-left">

          <p className="text-sm font-semibold text-white">
            Andrés López
          </p>

          <p className="text-xs text-blue-200">
            Coordinador de Mercadeo
          </p>

        </div>

        <ChevronDown
          size={18}
          className="text-blue-300"
        />

      </button>

    </div>
  );
}