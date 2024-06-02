// src/components/SeverityChart.js
import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

function SeverityChart({ data = [] }) {
  // Filter SSH events from the data
  const sshEvents = data.filter((event) => event.event_type === "ssh");

  // Count the occurrences of each SSH event severity
  const severityCount = sshEvents.reduce((acc, curr) => {
    // Assuming SSH events have severity 1
    const severity = 1;
    acc[severity] = (acc[severity] || 0) + 1;
    return acc;
  }, {});

  // Convert severity count to chart data format
  const parsedData = Object.keys(severityCount).map((key) => ({
    name: `Severity ${key}`,
    value: severityCount[key],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={parsedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
        >
         {parsedData.map((entry) => (
  <Cell key={`cell-${entry.name}`} fill={COLORS[parsedData.indexOf(entry) % COLORS.length]} />
))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default SeverityChart;
