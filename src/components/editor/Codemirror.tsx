import { useEffect } from "react";
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
  height: 40px;
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
  height: calc(100% - 40px);
`;

interface EditorProps {
  mode: string;
  theme: string;
}

const Editor = (props: EditorProps) => {
  const { mode, theme } = props;

  const {
    playgroundStore: { tabs, activeTabIndex, setActiveTabIndex, editTabCode },
  } = useStore();

  useEffect(() => {}, []);

  return (
    <StyledContainer>
      <TabsContainer>
        {tabs?.map((tab, index) => (
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
