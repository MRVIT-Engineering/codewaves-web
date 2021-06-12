import React from "react";
import { Spinner } from "../spinner/Spinner";

interface WithLoadingProps {
  loading: boolean;
}

export const withLoading =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & WithLoadingProps> =>
  ({ loading, ...props }) =>
    loading ? <Spinner /> : <Component {...(props as P)} />;
