import CarouselLine from "./CarouselLine";
import { Headline } from "../../common/Headline";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 1900px;
  margin: auto;
`;

const Line = styled.div`
  width: 100%;
  display: flex;
`;

export default function Carousel() {
  return (
    <StyledContainer>
      <Headline>
        Learn by doing<span className="dot">.</span>
      </Headline>
      <Line>
        <CarouselLine></CarouselLine>
        <CarouselLine></CarouselLine>
      </Line>
    </StyledContainer>
  );
}
