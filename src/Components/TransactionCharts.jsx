import React from "react";
import { Link } from "react-router-dom";
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

export default function TransactionCharts() {
  const data = [
    { name: "Ahmed Ali", value: 3600 },
    { name: "Aya", value: 2000 },
    { name: "Ahmed", value: 1500 },
    { name: "Sarah", value: 1500 },
    { name: "Mohamed", value: 700 },
    { name: "Sarah", value: 1300 },
    { name: "Mohsen", value: 2300 },
    { name: "Bor3y", value: 5002 },
    { name: "Mar3y", value: 3732 },
  ];

  return (
    <>
      <div className="items-center">
        <h1 className="mb-10 text-center text-xl font-bold">
          Displays The Total Transaction Amount
        </h1>

        <BarChart
          width={1200}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" stackId="a" fill="#8884d8" />
        </BarChart>
        <Link
          to={"/"}
          className="border hover:bg-gray-700 text-white bg-gray-500 rounded py-2 px-2 mt-4 block w-fit ms-[65px]"
        >
          Home
        </Link>
      </div>
    </>
  );
}
