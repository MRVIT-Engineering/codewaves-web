import { StaticCodeEditor, StaticCodeEditorProps } from './StaticCodeEditor';
import '../../assets/css/codemirror/StaticCodemirror.css';

export const QuizzAnswerEditor = (props: StaticCodeEditorProps) => {
  return <StaticCodeEditor {...props} />;
};
