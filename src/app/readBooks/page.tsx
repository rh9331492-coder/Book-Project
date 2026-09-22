"use client";

import React from "react";
import {
    Area,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    {
        name: "Jan",
        read: 2,
        wishlist: 5,
    },
    {
        name: "Feb",
        read: 4,
        wishlist: 7,
    },
    {
        name: "Mar",
        read: 6,
        wishlist: 8,
    },
    {
        name: "Apr",
        read: 5,
        wishlist: 10,
    },
    {
        name: "May",
        read: 8,
        wishlist: 12,
    },
    {
        name: "Jun",
        read: 10,
        wishlist: 15,
    },
];

const ReadBooks = () => {
    return (
        <div className="mx-auto mt-8 w-full max-w-[1180px] px-4">

            {/* Header */}
            <div className="mb-6">
                <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                    📊 Reading Statistics
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-800">
                    My Reading Activity
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Track your reading progress and wishlist activity.
                </p>
            </div>

            {/* Chart Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50 md:p-8">

                <div className="h-[400px] w-full">

                    <ComposedChart
                        width={700}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            left: 0,
                            bottom: 10,
                        }}
                    >

                        {/* Grid */}
                        <CartesianGrid strokeDasharray="3 3" />

                        {/* X Axis */}
                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: 13 }}
                        />

                        {/* Y Axis */}
                        <YAxis
                            width={40}
                            tick={{ fontSize: 13 }}
                        />

                        {/* Tooltip */}
                        <Tooltip />

                        {/* Legend */}
                        <Legend />

                        {/* Wishlist Area */}
                        <Area
                            type="monotone"
                            dataKey="wishlist"
                            name="Wishlist"
                            stroke="#fb923c"
                            fill="#fed7aa"
                            connectNulls
                        />

                        {/* Read Books Line */}
                        <Line
                            type="monotone"
                            dataKey="read"
                            name="Read Books"
                            stroke="#f97316"
                            strokeWidth={3}
                            connectNulls
                            dot={{ r: 4 }}
                        />

                    </ComposedChart>

                </div>
            </div>
        </div>
    );
};

export default ReadBooks;


