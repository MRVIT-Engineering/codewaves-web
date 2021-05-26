import classes from "../../../assets/css/Homepage.module.css";
import Wrapper from "../../ui-elements/containers/Wrapper";
import { editorBgColors } from "../../../constants/colors/editorBgColors";
import { ButtonReplicaComp } from "./ButtonReplica";
import { CodeEditorReplica } from "./CodeEditorReplica";
import { QuestionReplicaComp } from "./QuestionReplica";
import { Headline } from "../../ui-elements/common//Headline";
import { Separator } from "../../ui-elements/common/Separator";
import { GreyParagraph } from "../../ui-elements/common/GreyParagraph";
import PrimaryButton from "../../ui-elements/buttons/PrimaryButton";
import { lineColors } from "../../../constants/colors/editorReplicaLineColors";

import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function CoursePreview() {
  return (
    <div className={classes.CoursePreview}>
      <Wrapper>
        <div className={classes.Left}>
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <div className={classes.PerspectiveWrapper}>
              <div className={classes.HomepageCodeEditorWrapper}>
                <CodeEditorReplica
                  colorTheme={lineColors}
                  codeEditorTheme={editorBgColors.monakai}
                />
                <ButtonReplicaComp>REPLY</ButtonReplicaComp>
                <QuestionReplicaComp />
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className={classes.Right}>
          <ScrollAnimation animateOnce animateIn="fadeIn" delay={600}>
            <Headline>
              Learn from us & the community<span className="dot">.</span>
            </Headline>
            <Separator />
            <GreyParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              natus pariatur, explicabo fugit consequatur laboriosam earum
              dolorem quia quaerat molestiae quasi libero similique voluptas
              laudantium minima deleniti quam distinctio ex.
            </GreyParagraph>
            <PrimaryButton>start coding now</PrimaryButton>
          </ScrollAnimation>
        </div>
      </Wrapper>
    </div>
  );
}
