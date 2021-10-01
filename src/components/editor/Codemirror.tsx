import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import '../../assets/css/codemirror/themes/CustomDark.css';

export interface CodemirrorProps {
  value: string;
  setValue: (newValue: string) => void;
  mode?: string;
  lineNumbers?: boolean;
  theme?: string;
}

export const Codemirror = ({ value, setValue, mode, lineNumbers, theme }: CodemirrorProps) => {
  return (
    <CodeMirror
      value={value}
      options={{
        lineNumbers: lineNumbers,
        theme: theme || 'monokai',
        tabSize: 2,
        keyMap: 'sublime',
        mode: mode || 'javascript',
        readOnly: false,
      }}
      onChange={(editor, _change) => {
        setValue(editor.getValue());
      }}
    />
  );
};
