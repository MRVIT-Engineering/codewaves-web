import React from "react";

interface WithLoadingProps {
  loading: boolean;
}

export const withLoading =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & WithLoadingProps> =>
  ({ loading, ...props }) =>
    loading ? <h1>Loading ...</h1> : <Component {...(props as P)} />;
