import React from "react";
import heroImage from "../../../assets/images/homepage/hero.png";
import { Button } from "../../ui-elements/buttons/PrimaryButton";
import Wrapper from "../../ui-elements/containers/Wrapper";
import { Headline } from "../../ui-elements/common/Headline";
import styled from "styled-components";
import { Spacer } from "../../../components/ui-elements/common/Spacer";

import Typewriter from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.css";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  padding-left: 5rem;
  width: 45%;
  height: 100%;
`;

const Right = styled.div`
  width: 55%;
  height: 100%;
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
                typeSpeed="80"
                deleteSpeed="70"
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
          <Spacer height="50px" />
          <Button>get started</Button>
        </Left>
        <Right>
          <HeroImage />
        </Right>
      </Wrapper>
    </StyledContainer>
  );
}
