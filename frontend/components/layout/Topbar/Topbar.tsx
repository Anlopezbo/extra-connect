"use client";

import {
  Bell,
  CalendarDays,
  CircleHelp,
  Menu,
  Search,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-18 items-center justify-between border-b border-slate-200 bg-white px-8">

      <button className="rounded-lg p-2 transition hover:bg-slate-100">
        <Menu size={20} />
      </button>

      <div className="flex items-center gap-6">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Buscar..."
            className="h-11 w-72 rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500"
          />

        </div>

        <button className="relative rounded-lg p-2 hover:bg-slate-100">

          <Bell size={21} />

          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500" />

        </button>

        <button className="rounded-lg p-2 hover:bg-slate-100">
          <CircleHelp size={21} />
        </button>

        <button className="rounded-lg p-2 hover:bg-slate-100">
          <CalendarDays size={21} />
        </button>

      </div>

    </header>
  );
}