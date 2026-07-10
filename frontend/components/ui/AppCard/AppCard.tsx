"use client";

import { AppCardProps } from "./types";
import { cn } from "@/lib/utils";

export default function AppCard({
  children,
  className,
}: AppCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}