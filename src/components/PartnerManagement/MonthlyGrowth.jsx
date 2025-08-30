"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

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

export const description = "A multiple line chart (Week Data)";

const chartData = [
  { day: "Mon", series1: 4000, series2: 2500, series3: 2500 },
  { day: "Tue", series1: 3000, series2: 1500, series3: 2000 },
  { day: "Wed", series1: 2000, series2: 10000, series3: 2200 },
  { day: "Thu", series1: 3000, series2: 4000, series3: 2100 },
  { day: "Fri", series1: 2000, series2: 4800, series3: 1900 },
  { day: "Sat", series1: 2500, series2: 3800, series3: 2400 },
  { day: "Sun", series1: 3500, series2: 4300, series3: 2000 },
];

const chartConfig = {
  series1: { label: "Series 1", color: "#4F46E5" }, // Indigo
  series2: { label: "Series 2", color: "#22C55E" }, // Green
  series3: { label: "Series 3", color: "#F59E0B" }, // Amber
  series4: { label: "Series 4", color: "#EF4444" }, // Red
  series5: { label: "Series 5", color: "#06B6D4" }, // Cyan
};

export function MonthlyGrowth() {
  return (
    <Card className="flex flex-col ">
      <CardHeader className="pb-2">
        <CardTitle>Monthly Growth</CardTitle>
        <CardDescription>Line Chart</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 12, left: 12, right: 12, bottom: 12 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="series1"
              type="monotone"
              stroke="var(--color-series1)"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              dataKey="series2"
              type="monotone"
              stroke="var(--color-series2)"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              dataKey="series3"
              type="monotone"
              stroke="var(--color-series3)"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="pt-2">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-1">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 8.3% this week{" "}
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            <div className="text-muted-foreground leading-none">
              Showing total weekly data for 3 series
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default MonthlyGrowth;
