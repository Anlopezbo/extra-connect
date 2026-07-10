import {
    LayoutDashboard,
    Megaphone,
    Users,
    Image,
    BarChart3,
    Workflow,
    Send,
    UserCog,
    Shield,
    Settings,
} from "lucide-react";

export const sidebarItems = [
    {
        label: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
    },

    {
        label: "Comunicaciones",
        href: "/campaigns",
        icon: Megaphone,
    },

    {
        label: "Audiencias",
        href: "/audiences",
        icon: Users,
    },

    {
        label: "Contenido",
        href: "/content",
        icon: Image,
    },

    {
        label: "Analítica",
        href: "/analytics",
        icon: BarChart3,
    },

    {
        label: "Automatizaciones",
        href: "/automations",
        icon: Workflow,
    },

    {
        label: "Canales",
        href: "/channels",
        icon: Send,
    },

    {
        label: "Usuarios",
        href: "/users",
        icon: UserCog,
    },

    {
        label: "Auditoría",
        href: "/audit",
        icon: Shield,
    },

    {
        label: "Configuración",
        href: "/settings",
        icon: Settings,
    },
];