import Wrapper from "../../containers/Wrapper";
import { editorBgColors } from "../../../constants/colors/editorBgColors";
import { ButtonReplicaComp } from "./ButtonReplica";
import { CodeEditorReplica } from "./CodeEditorReplica";
import { QuestionReplicaComp } from "./QuestionReplica";
import { Headline } from "../../common/Headline";
import { Separator } from "../../common/Separator";
import { GreyParagraph } from "../../common/Paragraph";
import { Button } from "../../buttons/PrimaryButton";
import { lineColors } from "../../../constants/colors/editorReplicaLineColors";
import { homepageText } from "../../../constants/text/homepageText";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import { ScreenSize } from "../../../constants/media-queries/mediaQueris";

const StyledContainer = styled.div`
  background-color: var(--background-grey);
  min-height: 500px;
  padding: 250px 0;
  display: flex;

  ${ScreenSize.medium} {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

const PerspectiveContainer = styled.div`
  perspective: 1500px;
`;

const CodeContainer = styled.div`
  width: 580px;
  height: 400px;
  transform: rotateY(30deg);
  box-shadow: var(--light-shadow);
  position: relative;
  background-color: var(--monakai-bg);
  border-radius: var(--border-radius);

  ${ScreenSize.medium} {
    transform: rotateY(0);
  }

  ${ScreenSize.small} {
    width: 80vw;
  }
`;

const Left = styled.div`
  width: 50%;

  ${ScreenSize.medium} {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  min-height: 500px;
  width: 50%;
  padding-left: 75px;

  ${ScreenSize.medium} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    text-align: center;
  }

  ${ScreenSize.small} {
    padding: 0;
    width: 100%;
  }
`;

export default function CoursePreview() {
  return (
    <StyledContainer>
      <Wrapper>
        <Left>
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <PerspectiveContainer>
              <CodeContainer>
                <CodeEditorReplica
                  colorTheme={lineColors}
                  codeEditorTheme={editorBgColors.monakai}
                />
                <ButtonReplicaComp>REPLY</ButtonReplicaComp>
                <QuestionReplicaComp />
              </CodeContainer>
            </PerspectiveContainer>
          </ScrollAnimation>
        </Left>

        <Right>
          <ScrollAnimation animateOnce animateIn="fadeIn" delay={600}>
            <Headline>
              {homepageText.coursePreview.sectionTitle}
              <span className="dot">.</span>
            </Headline>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce delay={600}>
            <Separator />
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeIn" delay={600}>
            <GreyParagraph>{homepageText.coursePreview.text}</GreyParagraph>
            <Button onClick={() => {}}>start coding now</Button>
          </ScrollAnimation>
        </Right>
      </Wrapper>
    </StyledContainer>
  );
}
