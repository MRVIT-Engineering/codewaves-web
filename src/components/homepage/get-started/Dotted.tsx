import styled from "styled-components";

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: var(--primary);
  margin: 0 6px;
  float: left;
  margin-bottom: 6px;
`;

const StyledContainer = styled.div<{
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}>`
  width: 200px;
  height: 200px;
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

interface DottedProps {
  number: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const Dotted = (props: DottedProps) => {
  const numberOfDots = props.number;
  const dots = [];
  for (let i = 0; i < numberOfDots; i++) dots.push(i);

  return (
    <StyledContainer
      top={props.top}
      left={props.left}
      bottom={props.bottom}
      right={props.right}
    >
      {dots.map((dotIndex) => (
        <Dot key={dotIndex} />
      ))}
    </StyledContainer>
  );
};
