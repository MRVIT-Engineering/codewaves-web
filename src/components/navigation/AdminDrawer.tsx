import styled from 'styled-components';

import AdminNavList from './lists/AdminList';

const Drawer = styled.div`
  width: 22vw;
  height: 100vh;
  background-color: var(--background-grey);
  box-shadow: var(--inset-light-shadow);
`;

export const AdminDrawer = () => (
  <Drawer>
    <AdminNavList />
  </Drawer>
);
