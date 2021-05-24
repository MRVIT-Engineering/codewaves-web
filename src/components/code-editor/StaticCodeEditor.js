import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";

const code = `const a = 0; 

for(let i = 1; i < 100; i++) console.log(i)`;

export default function StaticCodeEditor() {
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
