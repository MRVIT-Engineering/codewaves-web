import styled from 'styled-components';

import { Colors } from '../../constants/style/Colors';

const StyledIcon = styled.span<{ size?: number; color?: string; hoverColor?: string }>`
  font-size: ${props => (props.size ? props.size + 'px' : '20px')};
  cursor: pointer;
  transition: color 0.4s;
  margin-top: 8px;
  color: ${props => (props.color ? props.color : Colors.customblack)};
  margin-bottom: 0;
  padding-bottom: 0;

  &:hover {
    color: ${props => (props.hoverColor ? props.hoverColor : Colors.primary)};
  }
`;
interface IconButtonProps {
  icon: any;
  onClick: () => void;
}

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return <StyledIcon onClick={onClick}>{icon}</StyledIcon>;
};
