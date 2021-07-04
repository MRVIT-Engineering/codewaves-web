import { ReactElement } from "react";
import styled from "styled-components";

const StyledIconContainer = styled.span<{ size?: number }>`
  font-size: ${(props) => (props.size ? props.size + "px" : "20px")};
  cursor: pointer;
  transition: color 0.4s;
  margin-top: 4px;

  &:hover {
    color: var(--primary);
  }
`;

interface IconProps {
  size?: number;
  icon: ReactElement;
  onClick: () => void;
}

export const Icon = (props: IconProps) => {
  const { size, icon, onClick } = props;

  return (
    <StyledIconContainer
      onClick={() => {
        onClick();
      }}
      size={size}
    >
      {icon}
    </StyledIconContainer>
  );
};
