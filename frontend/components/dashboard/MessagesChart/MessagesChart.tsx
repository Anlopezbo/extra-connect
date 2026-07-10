"use client";

import {
  CartesianGrid,
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartCard from "../ChartCard";
import { getMessagesChart } from "@/services/charts/messages.service";
import { useEffect, useState } from "react";
import { MessageChartPoint } from "@/types/charts/messages.types";

export default function MessagesChart() {

  const [data, setData] = useState<MessageChartPoint[]>([]);

  useEffect(() => {
    getMessagesChart().then(setData);
  }, []);

  return (
    <ChartCard
      title="Mensajes enviados"
      subtitle="Últimos 7 meses"
    >

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={data}>

                <defs>

                    <linearGradient
                        id="messagesGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >

                        <stop
                            offset="0%"
                            stopColor="#082C7D"
                            stopOpacity={0.35}
                        />

                        <stop
                            offset="100%"
                            stopColor="#082C7D"
                            stopOpacity={0}
                        />

                    </linearGradient>

                </defs>

                <CartesianGrid
                    vertical={false}
                    stroke="#E2E8F0"
                    strokeDasharray="3 3"
                />

                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                />

                <YAxis
                    tickFormatter={(v) => `${Number(v) / 1000}k`}
                    tickLine={false}
                    axisLine={false}
                />

                <Tooltip
                    cursor={{
                        stroke: "#CBD5E1",
                        strokeDasharray: "4 4",
                    }}
                />

                <Area
                    type="monotone"
                    dataKey="messages"
                    stroke="#082C7D"
                    strokeWidth={3}
                    fill="url(#messagesGradient)"
                    animationDuration={900}
                    activeDot={{
                        r: 6,
                    }}
                />

            </AreaChart>

        </ResponsiveContainer>

      </div>

    </ChartCard>
  );
}