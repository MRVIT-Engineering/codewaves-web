import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";

interface StaticCodeEditorProps {
  code: string;
}

export default function StaticCodeEditor(props: StaticCodeEditorProps) {
  const { code } = props;
  return (
    <CodeMirror
      value={code}
      options={{
        theme: "monokai",
        tabSize: 2,
        keyMap: "sublime",
        mode: "jsx",
        readOnly: true,
      }}
    />
  );
}
