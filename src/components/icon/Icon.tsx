import { ReactElement } from 'react';
import styled from 'styled-components';

import { Colors } from '../../constants/style/Colors';
import { withLoading } from '../hoc/withLoading';

const StyledIconContainer = styled.span<{ size?: number; color?: string; hoverColor?: string }>`
  font-size: ${props => (props.size ? props.size + 'px' : '20px')};
  cursor: pointer;
  transition: color 0.4s;
  margin-top: 8px;
  color: ${props => (props.color ? props.color : Colors.customblack)};
  margin-bottom: 0;
  padding-bottom: 0;
  height: ${props => (props.size ? props.size + 'px' : '20px')};
  overflow: hidden;

  &:hover {
    color: ${props => (props.hoverColor ? props.hoverColor : Colors.primary)};
  }
`;

interface IconProps {
  size?: number;
  icon: ReactElement;
  onClick?: () => void;
  color?: string;
  hoverColor?: string;
}

const Icon = (props: IconProps) => {
  const { size, icon, onClick, color, hoverColor } = props;

  return (
    <StyledIconContainer
      color={color}
      hoverColor={hoverColor}
      onClick={() => {
        onClick && onClick();
      }}
      size={size}
    >
      {icon}
    </StyledIconContainer>
  );
};

export default withLoading(Icon);
