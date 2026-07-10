"use client";

import { ChartCardProps } from "./types";

export default function ChartCard({
  title,
  subtitle,
  children,
}: ChartCardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-8">

        <h2 className="text-xl font-semibold text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">
            {subtitle}
          </p>
        )}

      </div>

      {children}

    </section>
  );
}