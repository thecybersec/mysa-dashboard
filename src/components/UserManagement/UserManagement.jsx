import NavigationBar from "../Reusable/NavigationBar";
import UserFilters from "./UserFilters";
import UsersTable from "./UsersTable";

const UserManagement = () => {
  const design = (
    <>
      <NavigationBar />
      <UserFilters />
      <UsersTable />
    </>
  );
  return design;
};
export default UserManagement;
