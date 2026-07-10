"use client";

import {
    LayoutDashboard,
    Megaphone,
    Users,
    Layers3,
    FileText,
    Workflow,
    BarChart3,
    UserCog,
    ShieldCheck,
    ClipboardList,
    Settings,
} from "lucide-react";

const menu = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Megaphone, label: "Campañas" },
    { icon: Users, label: "Contactos" },
    { icon: Layers3, label: "Segmentos" },
    { icon: FileText, label: "Plantillas" },
    { icon: Workflow, label: "Automatizaciones" },
    { icon: BarChart3, label: "Analítica" },
    { icon: UserCog, label: "Usuarios" },
    { icon: ShieldCheck, label: "Roles" },
    { icon: ClipboardList, label: "Auditoría" },
    { icon: Settings, label: "Configuración" },
];

export default function Sidebar() {
    return (
        <aside className="w-72 h-screen border-r bg-white">
            <div className="h-20 flex items-center px-8 border-b">
                <div>
                    <h1 className="text-xl font-bold text-blue-900">
                        EXTRA Connect
                    </h1>

                    <p className="text-xs text-gray-500">
                        Sorteo Extraordinario de Colombia
                    </p>
                </div>
            </div>

            <nav className="p-4 space-y-2">
                {menu.map(({ icon: Icon, label }) => (
                    <button
                        key={label}
                        className="flex items-center gap-3 w-full rounded-xl px-4 py-3 hover:bg-slate-100 transition"
                    >
                        <Icon size={18} />
                        <span>{label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
}