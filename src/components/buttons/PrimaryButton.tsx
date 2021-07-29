import styled from 'styled-components';

const StyledButton = styled.button<{ fullWidth?: boolean }>`
  min-width: ${props => (props.fullWidth ? '100%' : ' 200px')};
  height: 60px;
  background-color: var(--primary);
  color: white;
  outline: none;
  border: none;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'PT Mono', sans-serif;
  font-size: 1.6rem;
  transition: all 0.4s;
  padding: 16px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--light-shadow);
    background-color: var(--primary-dark);
  }
`;

export interface ButtonProps {
  onClick: () => void;
  fullWidth?: boolean;
  children?: any;
}

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton fullWidth={props.fullWidth} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};
