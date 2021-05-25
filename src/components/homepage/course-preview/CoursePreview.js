import classes from "../../../assets/css/Homepage.module.css";
import StaticCodeEditor from "../../code-editor/StaticCodeEditor";
import Wrapper from "../../ui-elements/containers/Wrapper";
import ButtonReplica from "./ButtonReplica";
import QuestionReplica from "./QuestionReplica";
import { Headline } from "../../ui-elements/common//Headline";
import { Separator } from "../../ui-elements/common/Separator";
import { GreyParagraph } from "../../ui-elements/common/GreyParagraph";
import PrimaryButton from "../../ui-elements/buttons/PrimaryButton";

const staticCodeEditorCode = `
const user = new CodewavesUser();

while(user.hasAvailableCourses()) {
  user.keepOnCoding();
}

user.graduateCodewavesAcademy('Woohooo!');`;

export default function CoursePreview() {
  return (
    <div className={classes.CoursePreview}>
      <Wrapper>
        <div className={classes.Left}>
          <div className={classes.PerspectiveWrapper}>
            <div className={classes.HomepageCodeEditorWrapper}>
              <StaticCodeEditor code={staticCodeEditorCode} />
              <ButtonReplica />
              <QuestionReplica />
            </div>
          </div>
        </div>
        <div className={classes.Right}>
          <Headline>
            Learn by doing<span className="dot">.</span>
          </Headline>
          <Separator />
          <GreyParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            natus pariatur, explicabo fugit consequatur laboriosam earum dolorem
            quia quaerat molestiae quasi libero similique voluptas laudantium
            minima deleniti quam distinctio ex.
          </GreyParagraph>
          <PrimaryButton>start coding now</PrimaryButton>
        </div>
      </Wrapper>
    </div>
  );
}
