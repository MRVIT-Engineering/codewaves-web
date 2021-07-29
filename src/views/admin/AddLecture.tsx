import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { observer } from 'mobx-react-lite';

import { LectureTypeOptions } from '../../constants/options/LectureTypeOptions';
import { SublectureType } from '../../constants/types/Sublecture';

import { Headline } from '../../components/common/Headline';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Separator } from '../../components/common/Separator';
import { TextInput } from '../../components/control/TextInput';
import { Textarea } from '../../components/control/Textarea';
import { Select } from '../../components/control/Select';
import { Spacer } from '../../components/common/Spacer';
import { HeadlineSmall } from '../../components/typography/Headlines';
import { Button } from '../../components/buttons/PrimaryButton';
import { useStore } from '../../hooks/useStore';

const StyledContainer = styled.div`
  width: 600px;
`;

const INITIAL_FORM_DATA = {
  title: '',
  type: 1,
  sublectures: [],
};

const AddLectureScreen = () => {
  const [formData, setFormData] = useState<any>(INITIAL_FORM_DATA);
  const [textSublecture, setTextSublecture] = useState('');
  const [codeSublecture, setCodeSublecture] = useState({ language: '', code: '' });
  const {
    courseStore: { addSublecture },
  } = useStore();
  const { state }: any = useLocation();

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <StyledContainer>
      <Breadcrumbs mainSection={state.courseTitle} crumbs={['Sections', state.sectionTitle, 'Add Lecture']} />
      <Headline>New Lecture</Headline>
      <Separator />
      <Spacer height={32} />
      <HeadlineSmall>General Information</HeadlineSmall>
      <TextInput
        name={'title'}
        placeholder={'Lecture title'}
        value={formData.title}
        onChange={({ target }) => {
          handleChange(target.name, target.value);
        }}
      />
      <Select
        options={LectureTypeOptions}
        value={formData.type}
        onChange={e => {
          setFormData({ ...formData, type: e.target.value });
        }}
      />
      <Spacer height={60} />
      <HeadlineSmall>Text Sublecture</HeadlineSmall>
      {+formData.type === 1 ? (
        <>
          <Textarea
            placeholder={'Enter text paragraph'}
            value={textSublecture}
            onChange={e => {
              setTextSublecture(e.target.value);
            }}
          />
          <Spacer height={16} />
          <Button
            fullWidth
            onClick={() => {
              addSublecture(textSublecture);
              setTextSublecture('');
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
              addSublecture(codeSublecture);
              setCodeSublecture({ language: '', code: '' });
            }}
          >
            Add code sublecture
          </Button>
        </>
      ) : (
        <p>we dont know yet ...</p>
      )}
    </StyledContainer>
  );
};

export default observer(AddLectureScreen);
