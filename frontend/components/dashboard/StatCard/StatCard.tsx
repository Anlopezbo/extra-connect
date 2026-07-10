"use client";

import { Card } from "@/components/ui/card";
import { StatCardProps } from "./types";

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">

      <div className="flex items-center justify-between p-6">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">
            {value}
          </h2>

          <p className="mt-2 text-sm text-emerald-600">
            {subtitle}
          </p>

        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">

          <Icon
            size={30}
            className="text-blue-700"
          />

        </div>

      </div>

    </Card>
  );
}