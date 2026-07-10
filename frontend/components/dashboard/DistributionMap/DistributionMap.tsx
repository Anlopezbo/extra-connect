"use client";

import { useEffect, useState } from "react";

import ChartCard from "../ChartCard";
import Legend from "./Legend";

import { DepartmentData } from "./types";
import { getDistributionData } from "@/services/dashboard/distribution.service";

export default function DistributionMap() {

  const [departments, setDepartments] = useState<DepartmentData[]>([]);

  useEffect(() => {
    getDistributionData().then(setDepartments);
  }, []);

  return (
    <ChartCard
      title="Distribución geográfica"
      subtitle={`Departamentos cargados: ${departments.length}`}
    >
      <div className="flex h-80 flex-col items-center justify-center gap-6">

        <div className="flex h-56 w-56 items-center justify-center rounded-full border-2 border-dashed border-slate-200 bg-slate-50">

          <span className="text-sm text-slate-400">
            Mapa de Colombia
          </span>

        </div>

        <Legend />

      </div>
    </ChartCard>
  );
}
