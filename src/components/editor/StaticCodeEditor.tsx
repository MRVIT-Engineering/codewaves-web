import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

export interface StaticCodeEditorProps {
  code: string;
  mode?: string;
  lineNumbers?: boolean;
}

export const StaticCodeEditor = ({ code, mode, lineNumbers }: StaticCodeEditorProps) => {
  return (
    <CodeMirror
      value={code}
      options={{
        lineNumbers: lineNumbers,
        theme: 'monokai',
        tabSize: 2,
        keyMap: 'sublime',
        mode: mode || 'jsx',
        readOnly: true,
      }}
    />
  );
};
