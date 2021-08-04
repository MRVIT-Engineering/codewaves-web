import styled from 'styled-components';
import { useState } from 'react';

import { STATUS_CODES } from '../../constants/statusCodes/StatusCodes';
import { ProgrammingLanguages } from '../../constants/options/LanguagesOptions';
import { CodeAnswer } from '../../constants/types/CodeAnswer';
import { QuizzOption, QuizzOptionType } from '../../models/Quizz';

import { Headline, HeadlineSmall } from '../../components/typography/Headlines';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Spacer } from '../../components/common/Spacer';
import { Separator } from '../../components/common/Separator';
import { TextInput } from '../../components/control/TextInput';
import { Textarea } from '../../components/control/Textarea';
import { Button } from '../../components/buttons/PrimaryButton';
import { Row } from '../../utils/style/styledComponents';
import { useStore } from '../../hooks/useStore';
import { Select } from '../../components/control/Select';

const StyledContainer = styled.div`
  width: 600px;
`;

export const AddQuizzScreen = () => {
  const [formData, setFormData] = useState({ title: '', question: '' });
  const [options, setOptions] = useState<QuizzOption[]>([]);
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [codeAnswer, setCodeAnswer] = useState<CodeAnswer>({
    code: '',
    language: '',
  });
  const {
    quizzStore: { addQuizz },
  } = useStore();

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleAddQuizz = async () => {
    setLoading(true);
    const { status } = await addQuizz({ ...formData, options: options });
    if (status !== STATUS_CODES.success) alert('Something went wrong!');
    else {
      setFormData({ title: '', question: '' });
      setOptions([]);
    }
    setLoading(false);
  };

  return (
    <StyledContainer>
      <Breadcrumbs mainSection={'Dashboard'} crumbs={['Add New Quizz']} />
      <Headline>Add Quizz</Headline>
      <Separator />
      <TextInput
        name={'title'}
        placeholder={'Quizz title'}
        value={formData.title}
        onChange={({ target }) => {
          handleChange(target.name, target.value);
        }}
      />
      <Textarea
        name={'question'}
        placeholder={'Enter the question'}
        value={formData.question}
        onChange={({ target }) => {
          handleChange(target.name, target.value);
        }}
      />
      <Spacer height={32} />
      <HeadlineSmall>Text Answer</HeadlineSmall>
      <Row>
        <TextInput
          noMargin
          placeholder={'Answer'}
          value={answer}
          onChange={({ target }) => {
            setAnswer(target.value);
          }}
        />
        <Spacer width={16} />
        <Button
          onClick={() => {
            setOptions([...options, { type: QuizzOptionType.Text, text: answer, correct: !options.length }]);
            setAnswer('');
          }}
        >
          {options.length ? 'Add Answer' : 'Add Right Answer'}
        </Button>
      </Row>
      <Spacer height={32} />
      <HeadlineSmall>Code Answer</HeadlineSmall>
      <Select
        value={codeAnswer.language}
        onChange={e => {
          setCodeAnswer({ ...codeAnswer, language: e.target.value });
        }}
        options={ProgrammingLanguages}
      />
      <Textarea
        placeholder={'Enter code here'}
        value={codeAnswer.code}
        onChange={e => {
          setCodeAnswer({ ...codeAnswer, code: e.target.value });
        }}
      />
      <Spacer height={16} />
      <Button
        fullWidth
        onClick={() => {
          setOptions([
            ...options,
            {
              type: QuizzOptionType.Code,
              code: codeAnswer.code,
              language: codeAnswer.language,
              correct: !options.length,
            },
          ]);
          setCodeAnswer({ ...codeAnswer, code: '' });
        }}
      >
        {options.length ? 'Add Code Answer' : 'Add Correct Code Answer'}
      </Button>
      <Spacer height={16} />
      <Button
        color={'success'}
        loading={loading}
        onClick={() => {
          handleAddQuizz();
        }}
        fullWidth
      >
        save quizz
      </Button>
      <Spacer height={32} />
    </StyledContainer>
  );
};
