"use client";

import {
  Megaphone,
  Users,
  Send,
  TrendingUp,
} from "lucide-react";

import StatCard from "../StatCard";

export default function StatsGrid() {
  return (
    <section className="grid gap-6 lg:grid-cols-4">

      <StatCard
        title="Campañas activas"
        value="12"
        subtitle="+3 este mes"
        icon={Megaphone}
      />

      <StatCard
        title="Contactos"
        value="24.850"
        subtitle="+8% crecimiento"
        icon={Users}
      />

      <StatCard
        title="Mensajes enviados"
        value="187.432"
        subtitle="Últimos 30 días"
        icon={Send}
      />

      <StatCard
        title="Tasa de apertura"
        value="94.8%"
        subtitle="+3.2%"
        icon={TrendingUp}
      />

    </section>
  );
}