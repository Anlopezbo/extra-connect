"use client";

export default function Legend() {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-500">

      <span>Menos</span>

      <div className="flex gap-1">

        <div className="h-3 w-3 rounded bg-blue-100" />
        <div className="h-3 w-3 rounded bg-blue-200" />
        <div className="h-3 w-3 rounded bg-blue-300" />
        <div className="h-3 w-3 rounded bg-blue-500" />
        <div className="h-3 w-3 rounded bg-[#082C7D]" />

      </div>

      <span>Más</span>

    </div>
  );
}
