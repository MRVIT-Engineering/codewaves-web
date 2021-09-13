import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/useStore';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/material.css';
import 'codemirror-minimap';
import 'codemirror-minimap/src/minimap.css';
import { FiPlay } from 'react-icons/fi';

import Icon from '../icon/Icon';
import { Colors } from '../../constants/style/Colors';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TabsContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #303f44;
  display: flex;
  align-items: center;
`;

const TabComp = styled.div<{ active?: boolean }>`
  width: 130px;
  height: 100%;
  background-color: ${props => (props.active ? '#253337' : '#303f44')};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const IconContainer = styled.div`
  margin-left: auto;
  margin-right: 32px;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: calc(100% - 50px);
`;

interface CompilerEditorProps {
  theme: string;
}

const CompilerEditor = ({ theme }: CompilerEditorProps) => {
  const {
    playgroundStore: { currentPlayground, activeTabIndex, setActiveTabIndex, editTabCode },
    compilerStore: { runCodeWithCompiler, compilerLoading },
  } = useStore();

  return (
    <StyledContainer>
      <TabsContainer>
        {currentPlayground.tabs.map((tab, index) => (
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
        <IconContainer>
          <Icon
            size={6}
            loading={compilerLoading}
            icon={<FiPlay />}
            onClick={async () => {
              await runCodeWithCompiler(1);
            }}
            loadingColor={Colors.success}
            color={Colors.success}
            hoverColor={Colors.successDark}
          />
        </IconContainer>
      </TabsContainer>
      <EditorContainer onClick={() => {}}>
        <CodeMirror
          value={currentPlayground.tabs[activeTabIndex].code}
          options={{
            theme,
            mode: currentPlayground.mode,
            keyMap: 'sublime',
          }}
          onChange={(editor, _change) => {
            editTabCode(editor.getValue());
          }}
        />
      </EditorContainer>
    </StyledContainer>
  );
};

export default observer(CompilerEditor);
