"use client";

import { PageHeaderProps } from "./types";

export default function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <section className="mb-10 flex items-start justify-between">

      <div className="space-y-2">

        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Dashboard
        </p>

        <h1 className="text-4xl font-bold leading-tight text-slate-900">
          {title}
        </h1>

        {description && (
          <p className="max-w-3xl text-base text-slate-500">
            {description}
          </p>
        )}

      </div>

      {actions && <div>{actions}</div>}

    </section>
  );
}