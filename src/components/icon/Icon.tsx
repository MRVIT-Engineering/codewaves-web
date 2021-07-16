import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledIconContainer = styled.span<{ size?: number; color?: string; hoverColor?: string }>`
  font-size: ${props => (props.size ? props.size + 'px' : '20px')};
  cursor: pointer;
  transition: color 0.4s;
  margin-top: 8px;
  color: ${props => (props.color ? props.color : 'var(--custom-black)')};
  margin-bottom: 0;
  padding-bottom: 0;

  &:hover {
    color: ${props => (props.hoverColor ? props.hoverColor : 'var(--primary)')};
  }
`;

interface IconProps {
  size?: number;
  icon: ReactElement;
  onClick: () => void;
  color?: string;
  hoverColor?: string;
}

export const Icon = (props: IconProps) => {
  const { size, icon, onClick, color, hoverColor } = props;

  return (
    <StyledIconContainer
      color={color}
      hoverColor={hoverColor}
      onClick={() => {
        onClick();
      }}
      size={size}
    >
      {icon}
    </StyledIconContainer>
  );
};
