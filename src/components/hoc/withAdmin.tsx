import { ComponentType } from "react";

import { PrivateAdminRoute } from "../routes/ProtectedAdminRoute";

export const withAdmin = <P extends object>(Component: ComponentType<P>) => {
  return ({ ...props }) => (
    <PrivateAdminRoute>
      <Component {...(props as P)} />
    </PrivateAdminRoute>
  );
};
