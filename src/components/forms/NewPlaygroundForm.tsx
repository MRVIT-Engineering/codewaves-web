import { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { FormProps } from '../../constants/types/FormProps';
import { ProgrammingLanguage } from '../../constants/languages/Languages';

import LanguagesSelect from '../control/LanguagesSelect';
import { TextInput } from '../control/TextInput';
import { Button } from '../buttons/PrimaryButton';
import { Spacer } from '../common/Spacer';
import { HeadlineSmall } from '../typography/Headlines';
import { Separator } from '../common/Separator';
import { useStore } from '../../hooks/useStore';

const StyledContainer = styled.div`
  padding: 0 32px;
`;

const NewPlaygroundForm = ({ onSubmit }: FormProps) => {
  const [playgroundName, setPlaygroundName] = useState('');
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState<ProgrammingLanguage>({
    name: '',
    compilers: [],
    extension: '',
    mode: '',
  });
  const {
    playgroundStore: { createPlayground, setMode, setCompilers, compilers, mode },
  } = useStore();

  return (
    <StyledContainer>
      <Spacer height={16} />
      <HeadlineSmall>Create your playground</HeadlineSmall>
      <Separator />
      <Spacer height={16} />
      <TextInput
        placeholder={"Enter your playground's name"}
        value={playgroundName}
        onChange={e => {
          setPlaygroundName(e.target.value);
        }}
      />

      <Spacer height={16} />
      <LanguagesSelect
        setTextValue={setLanguage}
        value={language}
        onValueChange={option => {
          console.log(option);
          setOption(option);
          setCompilers(option.compilers);
          setMode(option.mode);
        }}
      />
      <Spacer height={32} />
      <Button
        fullWidth
        loading={loading}
        onClick={async () => {
          try {
            setLoading(true);
            await createPlayground({
              title: playgroundName,
              compilers,
              mode,
              tabs: [
                {
                  name: `main${option.extension}`,
                  code: '',
                  language: option.mode,
                },
              ],
            });
            setLoading(false);
            onSubmit();
          } catch (error) {
            alert('Something went wrong');
          }
        }}
      >
        create playground
      </Button>
    </StyledContainer>
  );
};

export default observer(NewPlaygroundForm);
