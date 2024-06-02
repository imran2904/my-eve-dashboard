// src/components/ProtocolChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ProtocolChart({ data = [] }) {
  const protocolCount = data.reduce((acc, curr) => {
    acc[curr.proto] = (acc[curr.proto] || 0) + 1;
    return acc;
  }, {});

  const parsedData = Object.keys(protocolCount).map((key) => ({
    name: key,
    value: protocolCount[key],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={parsedData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ProtocolChart;
