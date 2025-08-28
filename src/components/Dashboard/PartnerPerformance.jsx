"use client";

import { TrendingUp } from "lucide-react";
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

export const description = "A donut chart";

const PartnerPerformance = () => {
  // Define data in the order you want (same as legend order)
  const chartData = [
    { name: "Paid", value: 95, color: "#f97316" }, // orange
    { name: "Restaurant", value: 91, color: "#ec4899" }, // pink
    { name: "Holiday Trips", value: 80, color: "#22c55e" }, // green
    { name: "Streaming Activities", value: 78, color: "#6366f1" }, // blue
  ];

  return (
    <Card className="flex flex-col w-[40%]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Partner Performance</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0 flex justify-start">
        <ChartContainer
          config={{}}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={3}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>

        {/* Legend */}
        <div className="flex flex-col justify-center  gap-2">
          {chartData.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-xs">
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

export default PartnerPerformance;
