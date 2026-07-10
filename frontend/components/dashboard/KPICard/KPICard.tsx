"use client";

import AppCard from "@/components/ui/AppCard";
import { KPICardProps } from "./types";

export default function KPICard({
  title,
  value,
  subtitle,
  icon: Icon,
}: KPICardProps) {
  return (
    <AppCard>

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="mt-2 text-sm text-green-600">
            {subtitle}
          </p>

        </div>

        <div className="rounded-2xl bg-blue-50 p-4">

          <Icon
            size={26}
            className="text-blue-700"
          />

        </div>

      </div>

    </AppCard>
  );
}