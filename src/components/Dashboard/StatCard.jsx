import {
  Users,
  UserPlus,
  Flag,
  UtensilsCrossed,
  CalendarDays,
} from "lucide-react";
import CardUI from "../Reusable/Card";

const statsData = [
  {
    id: 1,
    icon: Users,
    value: "24,521",
    label: "Active Users Today",
    change: "+12%",
  },
  {
    id: 2,
    icon: CalendarDays,
    value: "1,842",
    label: "Dates Planned Today",
    change: "+5%",
  },
  {
    id: 3,
    icon: UtensilsCrossed,
    value: "Dinner Date",
    label: "Top Date Type",
    subLabel: "38% of bookings", // extra line for subtitle
  },
  {
    id: 4,
    icon: UserPlus,
    value: "3,254",
    label: "New Users This Week",
    change: "+8%",
  },
  {
    id: 5,
    icon: Flag,
    value: "18",
    label: "Reports Pending",
  },
];

const StatCard = () => {
  return (
    <div
      className="
    grid 
    grid-cols-1        /* mobile: 1 card per row */
    sm:grid-cols-2     /* small screens: 2 cards */
    md:grid-cols-3     /* medium: 3 cards */
    lg:grid-cols-4     /* large: 4 cards */
    xl:grid-cols-5     /* extra large: 5 cards */
    gap-4 
    py-5
  "
    >
      {statsData.map((stat) => (
        <CardUI
          key={stat.id}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          change={stat.change}
          subLabel={stat.subLabel}
        />
      ))}
    </div>
  );
};

export default StatCard;
