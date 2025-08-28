import ActivityMonitor from "@/components/Dashboard/ActivityMonitor/ActivityMonitor";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

const ActivityMonitorPage = () => {
  const design = (
    <>
      <DashboardLayout>
        <ActivityMonitor />
      </DashboardLayout>
    </>
  );
  return design;
};

export default ActivityMonitorPage;
