"use client";

import { ExternalLink } from "lucide-react";

const activityData = [
  {
    userPair: "Alex & Sarah",
    activityType: "Restaurant Booking",
    date: "Today",
    time: "7:30 PM",
    status: "Planned",
    partner: "La Piazza",
  },
  {
    userPair: "Mike & Emma",
    activityType: "Movie Tickets",
    date: "Tomorrow",
    time: "--",
    status: "Confirmed",
    partner: "PVR Cinema",
  },
  {
    userPair: "John & Lisa",
    activityType: "Holiday Package",
    date: "Next Week",
    time: "6:00 PM",
    status: "In Progress",
    partner: "Travel Joy",
  },
];

const RecentActivity = () => {
  const design = (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm mt-5">
        {/* Header */}
        <div className="bg-white text-black px-5 py-3 font-semibold text-lg">
          Recent Activity
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-pink text-white text-left">
                <th className="px-6 py-3 font-medium">User Pair</th>
                <th className="px-6 py-3 font-medium">Activity Type</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Time</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Partner</th>
                <th className="px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {activityData.map((activity, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">{activity.userPair}</td>
                  <td className="px-6 py-4">{activity.activityType}</td>
                  <td className="px-6 py-4">{activity.date}</td>
                  <td className="px-6 py-4">{activity.time}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        activity.status === "Planned"
                          ? "bg-blue-100 text-blue-600"
                          : activity.status === "Confirmed"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{activity.partner}</td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-medium">
                      View <ExternalLink className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  return design;
};

export default RecentActivity;
