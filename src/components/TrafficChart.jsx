// src/components/TrafficChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function TrafficChart({ data = [] }) {
  const parsedData = data.map((d) => ({
    ...d,
    timestamp: new Date(d.timestamp).getTime(),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={parsedData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis
          dataKey="timestamp"
          tickFormatter={(tick) => new Date(tick).toLocaleTimeString()}
          stroke="#fff"
        />
        <YAxis stroke="#fff" />
        <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} />
        <Legend />
        <Line type="monotone" dataKey="flow_id" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TrafficChart;
