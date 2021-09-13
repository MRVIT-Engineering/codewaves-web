import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import Editor from '../../components/editor/Codemirror';
import { Browser } from '../../components/browser/Browser';
import { useStore } from '../../hooks/useStore';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Half = styled.div`
  width: 50%;
  height: 100vh;
`;

const PlaygroundScreen = () => {
  const {
    compilerStore: { compileWeb },
  } = useStore();

  return (
    <StyledContainer>
      <Half>
        <Editor
          onRunCode={() => {
            compileWeb();
          }}
          theme="material"
          mode="jsx"
        />
      </Half>
      <Half>
        <Browser />
      </Half>
    </StyledContainer>
  );
};

export default observer(PlaygroundScreen);
