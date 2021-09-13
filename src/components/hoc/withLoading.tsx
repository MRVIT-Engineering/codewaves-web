import React from 'react';
import { Spinner } from '../spinner/Spinner';

interface WithLoadingProps {
  loading?: boolean;
  size?: number;
  loadingColor?: string;
}

export const withLoading =
  <P extends object>(Component: React.ComponentType<P>): React.FC<P & WithLoadingProps> =>
  ({ loading, loadingColor, size, ...props }) =>
    loading ? <Spinner color={loadingColor} size={size} /> : <Component {...(props as P)} />;
