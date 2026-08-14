"use client";

import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { DepthReading } from "@/lib/types";

function stampLabel(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    timeZone: "America/Chicago",
  });
}

export function DepthChart({
  series,
}: {
  series: Array<{ id: string; name: string; color: string; readings: DepthReading[] }>;
}) {
  const times = series[0]?.readings.map((reading) => reading.t) ?? [];
  const data = times.map((t, index) => {
    const row: Record<string, string | number> = { t, label: stampLabel(t) };
    for (const item of series) {
      row[item.id] = item.readings[index]?.depthInches ?? 0;
    }
    return row;
  });

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
          <XAxis dataKey="label" tick={{ fontSize: 11 }} minTickGap={28} />
          <YAxis
            tick={{ fontSize: 11 }}
            width={40}
            label={{ value: "in", angle: -90, position: "insideLeft", fontSize: 11 }}
          />
          <Tooltip
            formatter={(value) => [`${Number(value).toFixed(1)} in`, "Depth"]}
            labelFormatter={(label) => String(label)}
          />
          {series.length > 1 ? <Legend /> : null}
          {series.map((item) => (
            <Line
              key={item.id}
              type="monotone"
              dataKey={item.id}
              name={item.name}
              stroke={item.color}
              dot={false}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
