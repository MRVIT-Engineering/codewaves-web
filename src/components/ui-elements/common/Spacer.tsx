import styled from "styled-components";

interface SpacerProps {
  width?: number;
  height?: number;
}

export const Spacer = styled.div<SpacerProps>`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
`;
