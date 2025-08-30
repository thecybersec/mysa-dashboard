import NavigationBar from "../Reusable/NavigationBar";
import MonthlyGrowth from "./MonthlyGrowth";
import PartnersTable from "./PartnersTable";
import PerformanceOverview from "./PerformanceOverview";
import StatsCard from "./StatsCard";

const PartnerManagement = () => {
  const design = (
    <>
      <NavigationBar />
      <StatsCard />
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
        <MonthlyGrowth />
        <PerformanceOverview />
      </div>
      <PartnersTable />
    </>
  );
  return design;
};

export default PartnerManagement;
