"use client";

import { PanelProps } from "./types";

export default function Panel({
  title,
  children,
}: PanelProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        {title}
      </h2>

      {children}

    </section>
  );
}