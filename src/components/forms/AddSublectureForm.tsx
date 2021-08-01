import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { SublectureTypes } from '../../constants/enums/SublectureType';

import { Textarea } from '../control/Textarea';
import { TextInput } from '../control/TextInput';
import { Button } from '../buttons/PrimaryButton';
import { Spacer } from '../common/Spacer';
import { HeadlineSmall } from '../typography/Headlines';
import { useStore } from '../../hooks/useStore';

const AddSublectureForm = () => {
  const [textSublecture, setTextSublecture] = useState({ text: '' });
  const [codeSublecture, setCodeSublecture] = useState({ language: '', code: '' });
  const {
    courseStore: { addSublecture },
  } = useStore();

  return (
    <>
      <HeadlineSmall>Text Sublecture</HeadlineSmall>
      <Textarea
        placeholder={'Enter text paragraph'}
        value={textSublecture.text}
        onChange={e => {
          setTextSublecture({ text: e.target.value });
        }}
      />
      <Spacer height={16} />
      <Button
        fullWidth
        onClick={() => {
          addSublecture({ ...textSublecture, type: SublectureTypes.TextSublecture });
          setTextSublecture({ text: '' });
        }}
      >
        Add text Sublecture
      </Button>
      <Spacer height={60} />
      <HeadlineSmall>Code Sublecture </HeadlineSmall>
      <TextInput
        placeholder={'Programming language'}
        value={codeSublecture.language}
        onChange={e => {
          setCodeSublecture({ ...codeSublecture, language: e.target.value });
        }}
      />
      <Textarea
        placeholder={'Enter code example here'}
        value={codeSublecture.code}
        onChange={e => {
          setCodeSublecture({ ...codeSublecture, code: e.target.value });
        }}
      />
      <Spacer height={16} />
      <Button
        fullWidth
        onClick={() => {
          addSublecture({ ...codeSublecture, type: SublectureTypes.CodeSublecture });
          setCodeSublecture({ language: '', code: '' });
        }}
      >
        Add code sublecture
      </Button>
    </>
  );
};

export default observer(AddSublectureForm);
