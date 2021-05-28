import { Button } from "../../buttons/PrimaryButton";
import { Headline } from "../../common/Headline";
import { ScreenSize } from "../../../constants/media-queries/mediaQueris";
import { Spacer } from "../../common/Spacer";
import Wrapper from "../../containers/Wrapper";
import heroImage from "../../../assets/images/homepage/hero.png";
import styled from "styled-components";

import Typewriter from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.css";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${ScreenSize.medium} {
    height: 75vh;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  padding-left: 5rem;
  width: 45%;
  height: 100%;

  ${ScreenSize.medium} {
    width: 100%;
    align-items: center;
    padding: 0;
  }
`;

const Right = styled.div`
  width: 55%;
  height: 100%;
  ${ScreenSize.medium} {
    display: none;
  }
`;

const HeroImage = styled.img.attrs({
  src: heroImage,
  alt: "Hero.",
})`
  width: 100%;
  height: auto;
`;

export default function Hero() {
  return (
    <StyledContainer>
      <Wrapper>
        <Left>
          <Headline>
            Start learning <br />{" "}
            <span className="dot">
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={70}
                words={[
                  "HTML & CSS",
                  "javascript",
                  "c++ & algorithms",
                  "python",
                  "and much more",
                ]}
              />
            </span>
          </Headline>
          <Spacer height={50} />
          <Button onClick={() => {}}>get started</Button>
        </Left>
        <Right>
          <HeroImage />
        </Right>
      </Wrapper>
    </StyledContainer>
  );
}
