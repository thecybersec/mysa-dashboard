import NavigationBar from "@/components/Reusable/NavigationBar";
import ProfileCard from "./ProfileCard";
import PageHeader from "@/components/Reusable/PageHeader";

const UserProfile = () => {
  const design = (
    <>
      <NavigationBar />

      <PageHeader rightText="View Profile" />

      <ProfileCard />
    </>
  );
  return design;
};

export default UserProfile;
