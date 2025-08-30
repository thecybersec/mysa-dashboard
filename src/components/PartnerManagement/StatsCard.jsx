"use client";

import { Card, CardContent } from "@/components/ui/card";
const StatsCard = () => {
  const stats = [
    { title: "Total Partners", value: "324", change: "+12%" },
    { title: "Active Partners", value: "286", change: "+8%" },
    { title: "Pending Approval", value: "12", change: "-2%" },
    { title: "Average Rating", value: "4.8", change: "+0.2" },
  ];
  const design = (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  py-5 rounded-xl">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="rounded-lg shadow-sm border border-pink-200"
          >
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">{stat.title}</p>
              <div className="flex items-center justify-between mt-2">
                <h2 className="text-2xl font-bold">{stat.value}</h2>
                <span
                  className={`text-sm font-medium ${
                    stat.change.includes("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
  return design;
};
export default StatsCard;
