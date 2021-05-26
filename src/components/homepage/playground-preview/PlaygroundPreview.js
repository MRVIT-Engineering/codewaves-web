import React from "react";
import styled from "styled-components";
import { Headline } from "../../ui-elements/common/Headline";
import { Separator } from "../../ui-elements/common/Separator";
import { GreyParagraph } from "../../ui-elements/common/Paragraph";
import { CodeEditorReplica } from "../course-preview/CodeEditorReplica";
import { TerminalReplica } from "./TerminalReplica";
import { lightLineColors } from "../../../constants/colors/editorReplicaLineColors";
import { homepageText } from "../../../constants/text/homepageText";
import ScrollAnimation from "react-animate-on-scroll";
import { ScreenSize } from "../../../constants/media-queries/mediaQueris";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 250px 0;

  ${ScreenSize.medium} {
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledPlaygroundContainer = styled.div`
  width: 680px;
  height: 500px;
  transform: rotateY(-30deg);
  display: flex;
  justify-content: space-between;
  background: transparent;
  margin: 0;

  ${ScreenSize.medium} {
    transform: rotateY(0);
    margin: 0 !important;
    padding: 0;
  }
`;

const PerspectiveContainer = styled.div`
  perspective: 1500px;
`;

const PlaygroundHalf = styled.div`
  width: 330px;
  height: 100%;
  box-shadow: var(--light-shadow);
  border-radius: var(--border-radius);
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 50px 0 250px;

  ${ScreenSize.medium} {
    padding: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 75px;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  ${ScreenSize.medium} {
    justify-content: center;
    align-items: center;
  }
`;

export default function PlaygroundPreview() {
  return (
    <StyledContainer>
      <Left>
        <ScrollAnimation animateOnce delay={350} animateIn="fadeInLeft">
          <Headline>
            {homepageText.playgroundPreview.sectionTitle}
            <span className="dot">.</span>
          </Headline>
        </ScrollAnimation>
        <ScrollAnimation animateOnce delay={350} animateIn="fadeInLeft">
          <Separator />
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInLeft" delay={350}>
          <GreyParagraph>{homepageText.playgroundPreview.text}</GreyParagraph>
        </ScrollAnimation>
      </Left>
      <Right>
        <PerspectiveContainer>
          <StyledPlaygroundContainer>
            <ScrollAnimation animateOnce animateIn="fadeInUp">
              <PlaygroundHalf>
                <CodeEditorReplica
                  colorTheme={lightLineColors}
                  codeEditorTheme="white"
                />
              </PlaygroundHalf>
            </ScrollAnimation>
            <ScrollAnimation delay={300} animateOnce animateIn="fadeInUp">
              <PlaygroundHalf>
                <TerminalReplica />
              </PlaygroundHalf>
            </ScrollAnimation>
          </StyledPlaygroundContainer>
        </PerspectiveContainer>
      </Right>
    </StyledContainer>
  );
}
