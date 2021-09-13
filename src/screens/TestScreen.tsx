import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import styled from 'styled-components';
import LanguagesSelect from '../components/control/LanguagesSelect';
import { useStore } from '../hooks/useStore';

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 450px;
  height: 350px;
`;

const TestScreen = () => {
  const {
    playgroundStore: { setPlaygroundProgrammingLanguage, setCompilers },
  } = useStore();
  const [value, setValue] = useState('');
  return (
    <StyledContainer>
      <Wrapper>
        <LanguagesSelect
          value={value}
          setTextValue={setValue}
          onValueChange={({ name, compilers }) => {
            setCompilers(compilers);
            setPlaygroundProgrammingLanguage(name);
            // setActiveCompiler(compilers[0]);
          }}
        />
      </Wrapper>
    </StyledContainer>
  );
};

export default observer(TestScreen);
