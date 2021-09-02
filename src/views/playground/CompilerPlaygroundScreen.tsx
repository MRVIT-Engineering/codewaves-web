import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import CompilerEditor from '../../components/editor/CompilerEditor';
import Terminal from '../../components/terminal/Terminal';
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

const CompilerPlaygroundScreen = () => {
  const {
    compilerStore: { runCodeWithCompiler },
  } = useStore();

  return (
    <StyledContainer>
      <Half>
        <CompilerEditor
          compiler={{ id: 1, name: 'gcc C++ 1.14' }}
          onRunCode={() => {
            runCodeWithCompiler(1);
          }}
          theme="material"
          mode="c++"
        />
      </Half>
      <Half>
        <Terminal username={'username'} compiler={'C++ GCC'} />
      </Half>
    </StyledContainer>
  );
};

export default observer(CompilerPlaygroundScreen);
