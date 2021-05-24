import classes from "../../assets/css/Homepage.module.css";
import StaticCodeEditor from "../code-editor/StaticCodeEditor";
import Wrapper from "../../components/ui-elements/containers/Wrapper";

export default function CoursePreview() {
  return (
    <div className={classes.CoursePreview}>
      <Wrapper>
        <div className={classes.PerspectiveWrapper}>
          <div className={classes.HomepageCodeEditorWrapper}>
            <StaticCodeEditor />
            rares are mere
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
