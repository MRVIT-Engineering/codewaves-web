import React from "react";
import classes from "../../../assets/css/Homepage.module.css";
import styled from "styled-components";
import { Headline } from "../../ui-elements/common/Headline";
import { Separator } from "../../ui-elements/common/Separator";
import { GreyParagraph } from "../../ui-elements/common/GreyParagraph";
import { CodeEditorReplica } from "../course-preview/CodeEditorReplica";
import { TerminalReplica } from "./TerminalReplica";
import { lightLineColors } from "../../../constants/colors/editorReplicaLineColors";
import ScrollAnimation from "react-animate-on-scroll";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 250px 0;
`;

const StyledPlaygroundContainer = styled.div`
  width: 680px;
  height: 500px;
  transform: rotateY(-30deg);
  display: flex;
  justify-content: space-between;
  background: transparent;
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
  padding: 0 50px 0 150px;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export default function PlaygroundPreview() {
  return (
    <StyledContainer>
      <Left>
        <ScrollAnimation animateOnce delay={350} animateIn="fadeInLeft">
          <Headline>
            Experimpent<span className="dot">.</span>
          </Headline>
          <Separator />
          <GreyParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            cupiditate beatae neque. Modi fugiat quis blanditiis ea facere
            voluptas cum?
          </GreyParagraph>
        </ScrollAnimation>
      </Left>
      <Right>
        <div className={classes.PerspectiveWrapper}>
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
        </div>
      </Right>
    </StyledContainer>
  );
}
