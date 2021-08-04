import styled from 'styled-components';

import { Spinner } from '../spinner/Spinner';

const StyledButton = styled.button<{ fullWidth?: boolean; bgColor?: string }>`
  min-width: ${props => (props.fullWidth ? '100%' : ' 200px')};
  height: 60px;
  background-color: ${props => `var(--${props.bgColor})`};
  color: #fff;
  outline: none;
  border: none;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'PT Mono', sans-serif;
  font-size: 1.6rem;
  transition: all 0.4s;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--light-shadow);
    background-color: ${props => `var(--${props.bgColor}-dark)`};
  }
`;

export interface ButtonProps {
  onClick: () => void;
  fullWidth?: boolean;
  children?: any;
  type?: 'success' | 'danger';
  loading?: boolean;
  color?: string;
}

export const Button = ({ fullWidth, onClick, loading, children, color }: ButtonProps) => {
  return (
    <StyledButton bgColor={color || 'primary'} disabled={loading} fullWidth={fullWidth} onClick={onClick}>
      {loading ? <Spinner size={8} color={'#ffffff'} /> : children}
    </StyledButton>
  );
};
