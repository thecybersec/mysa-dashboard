import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import PartnerManagement from "@/components/PartnerManagement/PartnerManagement";

const PartnerManagementPage = () => {
  const design = (
    <>
      <DashboardLayout>
        <PartnerManagement />
      </DashboardLayout>
    </>
  );
  return design;
};

export default PartnerManagementPage;
