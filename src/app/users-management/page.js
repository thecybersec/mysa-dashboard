import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import UserManagement from "@/components/UserManagement/UserManagement";

const UserManagementPage = () => {
  const design = (
    <>
      <DashboardLayout>
        <UserManagement />
      </DashboardLayout>
    </>
  );
  return design;
};

export default UserManagementPage;
