import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import UserProfile from "@/components/UserManagement/UserProfile/UserProfile";

const UserProfilePage = () => {
  const design = (
    <>
      <DashboardLayout>
        <UserProfile />
      </DashboardLayout>
    </>
  );
  return design;
};

export default UserProfilePage;
