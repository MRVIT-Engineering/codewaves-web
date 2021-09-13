import styled from 'styled-components';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { algoComplexityOptions } from '../../constants/options/AlgoComplexityOptions';
import { algoTypeOptions } from '../../constants/options/AlgoTypeOptions';
import { ProgrammingLanguages } from '../../constants/options/LanguagesOptions';
import { AlgoComplexities } from '../../constants/enums/AlgoComplexities';
import { AlgorithmTypes } from '../../constants/enums/AlgoTypes';
import { STATUS_CODES } from '../../constants/statusCodes/StatusCodes';

import { Headline } from '../../components/typography/Headlines';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Spacer } from '../../components/common/Spacer';
import { Separator } from '../../components/common/Separator';
import { TextInput } from '../../components/control/TextInput';
import { Textarea } from '../../components/control/Textarea';
import { Button } from '../../components/buttons/PrimaryButton';
import { Row } from '../../utils/style/styledComponents';
import { useStore } from '../../hooks/useStore';
import { Select } from '../../components/control/Select';
import { Algo } from '../../models/Algo';

const StyledContainer = styled.div`
  width: 600px;
`;

const INITIAL_FORM_DATA = {
  title: '',
  complexity: AlgoComplexities.NotSelected,
  type: AlgorithmTypes.NotSelected,
  algorithm: [{ language: '', code: '' }],
};

const AddAlgoScreen = () => {
  const [formData, setFormData] = useState<Algo>(INITIAL_FORM_DATA);
  const [languageAlgorithm, setLanguageAlgorithm] = useState({ language: '', code: '' });
  const [loading, setLoading] = useState(false);
  const {
    algoStore: { addAlgo },
  } = useStore();

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleAddAlgo = async () => {
    setLoading(true);
    try {
      const { status } = await addAlgo({ ...formData });
      if (status === STATUS_CODES.success) alert('Algo added!');
    } catch (error) {
      alert(error.message);
    }
    setFormData(INITIAL_FORM_DATA);
    setLoading(false);
  };

  return (
    <StyledContainer>
      <Breadcrumbs mainSection={'Dashboard'} crumbs={['Add New Algorithm']} />
      <Headline>Add New Algo</Headline>
      <Separator />
      <TextInput
        name={'title'}
        placeholder={'Algo title'}
        value={formData.title}
        onChange={({ target }) => {
          handleChange(target.name, target.value);
        }}
      />
      <Spacer height={16} />
      <Select
        placeholder={'Choose algo complexity'}
        onChange={e => {
          setFormData({ ...formData, complexity: e.target.value });
        }}
        value={formData.complexity}
        options={algoComplexityOptions}
      />
      <Spacer height={16} />
      <Select
        placeholder={'Choosee algo type'}
        value={formData.type}
        onChange={e => {
          setFormData({ ...formData, type: e.target.value });
        }}
        options={algoTypeOptions}
      />
      <Textarea
        value={languageAlgorithm.code}
        onChange={e => {
          setLanguageAlgorithm({ ...languageAlgorithm, code: e.target.value });
        }}
        placeholder={'Algorithm code'}
      />
      <Spacer height={16} />
      <Row>
        <Select
          placeholder={'Choose programming language'}
          value={languageAlgorithm.language}
          onChange={e => {
            setLanguageAlgorithm({ ...languageAlgorithm, language: e.target.value });
          }}
          options={ProgrammingLanguages}
        />
        <Spacer width={16} />
        <Button
          onClick={() => {
            setFormData({ ...formData, algorithm: [...formData.algorithm, languageAlgorithm] });
            setLanguageAlgorithm({ code: '', language: '' });
          }}
        >
          Add Algo Variant
        </Button>
      </Row>
      <Spacer height={16} />
      <Button fullWidth onClick={handleAddAlgo} loading={loading}>
        Save Algorithm
      </Button>
    </StyledContainer>
  );
};

export default observer(AddAlgoScreen);
