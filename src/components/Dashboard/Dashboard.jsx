import NavigationBar from "../Reusable/NavigationBar";
import { ChartAreaInteractive } from "./Chart";
import PartnerPerformance from "./PartnerPerformance";
import RecentActivity from "./RecentActivity";
import StatCard from "./StatCard";

const Dashboard = () => {
  const design = (
    <>
      <NavigationBar />
      <StatCard />
      <div className="flex gap-4 ">
        <div className="w-[60%]">
          <ChartAreaInteractive />
        </div>
        <PartnerPerformance />
      </div>

      <RecentActivity />
    </>
  );
  return design;
};

export default Dashboard;
