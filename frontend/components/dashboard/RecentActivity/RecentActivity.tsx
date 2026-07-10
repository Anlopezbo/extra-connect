"use client";

import Panel from "../Panel";

export default function RecentActivity() {
  return (
    <Panel title="Actividad reciente">

      <div className="space-y-5">

        <div>

          <p className="font-medium">
            Campaña Mundial 2026
          </p>

          <p className="text-sm text-slate-500">
            Hace 5 minutos
          </p>

        </div>

        <div>

          <p className="font-medium">
            Nuevo segmento creado
          </p>

          <p className="text-sm text-slate-500">
            Hace 18 minutos
          </p>

        </div>

        <div>

          <p className="font-medium">
            Sincronización WhatsApp
          </p>

          <p className="text-sm text-slate-500">
            Hace 1 hora
          </p>

        </div>

      </div>

    </Panel>
  );
}