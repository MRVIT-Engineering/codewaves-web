import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";
import styled from "styled-components";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/material.css";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TabsContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #303f44;
  display: flex;
`;

const TabComp = styled.div<{ active?: boolean }>`
  width: 130px;
  height: 100%;
  background-color: ${(props) => (props.active ? "#253337" : "#303f44")};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: calc(100% - 50px);
`;

const StyledButton = styled.button`
  width: 130px;
  height: 100%;
  background-color: var(--success);
  transition: background-color 0.4s;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-family: "PT Mono";
  margin-left: auto;

  &:hover {
    background-color: var(--success-dark);
  }
`;

interface EditorProps {
  mode: string;
  theme: string;
  onRunCode: () => void;
}

const Editor = (props: EditorProps) => {
  const { mode, theme, onRunCode } = props;

  const {
    playgroundStore: { tabs, activeTabIndex, setActiveTabIndex, editTabCode },
  } = useStore();

  return (
    <StyledContainer>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <TabComp
            onClick={() => {
              setActiveTabIndex(index);
            }}
            key={tab.name}
            active={index === activeTabIndex}
          >
            {tab.name}
          </TabComp>
        ))}
        <StyledButton
          onClick={() => {
            onRunCode();
          }}
        >
          RUN
        </StyledButton>
      </TabsContainer>
      <EditorContainer onClick={() => {}}>
        <CodeMirror
          value={tabs[activeTabIndex].code}
          options={{
            theme,
            mode,
            keyMap: "sublime",
          }}
          onChange={(editor, change) => {
            editTabCode(editor.getValue());
          }}
          onKeyDown={() => {}}
        />
      </EditorContainer>
    </StyledContainer>
  );
};

export default observer(Editor);
