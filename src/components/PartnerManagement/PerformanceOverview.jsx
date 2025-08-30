"use client";

import { Pie, PieChart, Cell } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";

const PerformanceOverview = () => {
  const chartData = [
    { name: "Entertainment", value: 95, color: "#f97316" }, // orange
    { name: "Restaurant", value: 91, color: "#ec4899" }, // pink
    { name: "Events", value: 80, color: "#22c55e" }, // green
    { name: "Holiday Trips", value: 21, color: "#6b7280" }, // gray
    { name: "Streaming Activities", value: 28, color: "#6366f1" }, // blue
  ];

  return (
    <Card className="flex flex-col ">
      {" "}
      {/* fixed height for balance */}
      <CardHeader className="items-center pb-2">
        <CardTitle>Performance Overview</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center justify-between gap-6">
        {/* Chart */}
        <ChartContainer
          config={{}}
          className="flex items-center justify-center w-1/2 h-[280px]"
        >
          <PieChart width={280} height={280}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>

        {/* Legend */}
        <div className="flex flex-col gap-3 w-1/2">
          {chartData.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-sm">
                {item.name}{" "}
                <span className="font-semibold text-green-600">
                  {item.value}%
                </span>
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default PerformanceOverview;
