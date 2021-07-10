import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { Headline } from '../../common/Headline';
import { Separator } from '../../common/Separator';
import { GreyParagraph } from '../../common/Paragraph';
import { CodeEditorReplica } from '../course-preview/CodeEditorReplica';
import { TerminalReplica } from './TerminalReplica';
import { lightLineColors } from '../../../constants/colors/editorReplicaLineColors';
import { homepageText } from '../../../constants/text/homepageText';
import { ScreenSize } from '../../../constants/media-queries/mediaQueris';

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
  width: 700px;
  height: 470px;
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

  ${ScreenSize.small} {
    width: 90vw;
  }
`;

const PerspectiveContainer = styled.div`
  perspective: 1500px;
`;

const PlaygroundHalf = styled.div`
  width: 340px;
  height: 100%;
  box-shadow: var(--light-shadow);
  border-radius: var(--border-radius);

  ${ScreenSize.small} {
    width: 44vw;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 100px 0 200px;

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
  flex-direction: row;
  justify-content: flex-start;
  margin-left: -50px;

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
                <CodeEditorReplica colorTheme={lightLineColors} codeEditorTheme="white" />
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
