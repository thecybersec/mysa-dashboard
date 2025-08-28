import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import Dashboard from "@/components/Dashboard/Dashboard";
const DashboardPage = () => {
  const design = (
    <>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </>
  );

  return design;
};

export default DashboardPage;
