import { DashboardData } from "@/types/dashboard/dashboard.types";

export const dashboardMock: DashboardData = {

  stats: [

    {
      id: "campaigns",
      title: "Campañas activas",
      value: "12",
      subtitle: "+3 este mes",
      icon: "megaphone",
    },

    {
      id: "contacts",
      title: "Contactos",
      value: "24.850",
      subtitle: "+8% crecimiento",
      icon: "users",
    },

    {
      id: "messages",
      title: "Mensajes enviados",
      value: "187.432",
      subtitle: "Últimos 30 días",
      icon: "send",
    },

    {
      id: "open-rate",
      title: "Tasa de apertura",
      value: "94.8%",
      subtitle: "+3.2%",
      icon: "trending-up",
    },

  ],

};