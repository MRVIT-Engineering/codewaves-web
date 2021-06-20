import { AdminDrawer } from "../navigation/AdminDrawer";
import { AdminContainer } from "../containers/AdminContainer";
import { AdminScreensContainer } from "../containers/AdminScreensContainer";

export const AdminNavHoc = (props: any) => {
  return (
    <AdminContainer>
      <AdminDrawer />
      <AdminScreensContainer>{props.children}</AdminScreensContainer>
    </AdminContainer>
  );
};
