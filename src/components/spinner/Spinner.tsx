import styled from 'styled-components';
import SyncSpinner from 'react-spinners/SyncLoader';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface SpinnerProps {
  color?: string;
  size?: number;
}

export const Spinner = ({ color, size }: SpinnerProps) => (
  <StyledContainer>
    <SyncSpinner color={color || '#827ffe'} size={size || 12} margin={2} />
  </StyledContainer>
);
