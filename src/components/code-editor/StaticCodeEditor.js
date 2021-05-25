import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";

export default function StaticCodeEditor(props) {
  return (
    <CodeMirror
      value={props.code}
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
