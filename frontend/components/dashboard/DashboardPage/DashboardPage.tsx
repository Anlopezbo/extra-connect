"use client";

import PageHeader from "@/components/common/PageHeader";

import StatsGrid from "../StatsGrid";
import ChannelPerformance from "../ChannelPerformance";
import RecentActivity from "../RecentActivity";
import MessagesChart from "../MessagesChart";
import DistributionMap from "../DistributionMap";

export default function DashboardPage() {
  return (
    <>

      <PageHeader
        title="¡Buenos días, Andrés! 👋"
        description="Aquí tienes un resumen general de la actividad de EXTRA Connect."
      />

      <StatsGrid />

      <section className="mt-8 grid gap-8 lg:grid-cols-2">

        <ChannelPerformance />

        <RecentActivity />

        <div className="mt-8">
            <MessagesChart />
        </div>

        <DistributionMap />

      </section>

    </>
  );
}