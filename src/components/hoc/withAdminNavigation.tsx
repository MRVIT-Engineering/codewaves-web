import React, { ComponentType } from "react";
import { AdminDrawer } from "../navigation/AdminDrawer";
import { AdminContainer } from "../containers/AdminContainer";
import { AdminScreensContainer } from "../containers/AdminScreensContainer";

export const withAdminNavigation = <P extends object>(Component: ComponentType<P>) => {
  return ({ ...props }) => (
    <AdminContainer>
      <AdminDrawer />
      <AdminScreensContainer>
        <Component {...(props as P)} />
      </AdminScreensContainer>
    </AdminContainer>
  );
};
