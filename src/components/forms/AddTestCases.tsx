import { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Colors } from '../../constants/style/Colors';

import { TextInput } from '../control/TextInput';
import { useStore } from '../../hooks/useStore';
import { Textarea } from '../control/Textarea';
import { Spacer } from '../common/Spacer';
import { Button } from '../buttons/PrimaryButton';

const StyledNotification = styled.p`
  width: 100%;
  background-color: ${Colors.successLight};
  color: ${Colors.successDark};
  padding: 16px;
  border-radius: 8px;
`;

const Row = styled.div`
  display: flex;
`;

const AddTestCaseForm = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [timelimit, setTimelimit] = useState('');

  const {
    problemsStore: {
      addTestCase,
      loading,
      currentProblem: { sphereEngineId },
    },
  } = useStore();

  const handleAddCase = async () => {
    await addTestCase({ input, output, timelimit: +timelimit });
  };

  return (
    <>
      <StyledNotification>Your sphere engine problem id is: #{sphereEngineId}</StyledNotification>
      <Row>
        <Textarea
          placeholder={'set input'}
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <Spacer width={16} />
        <Textarea
          placeholder={'enter output'}
          value={output}
          onChange={e => {
            setOutput(e.target.value);
          }}
        />
      </Row>
      <TextInput
        placeholder={'Set test timelimit'}
        value={timelimit}
        onChange={e => {
          setTimelimit(e.target.value);
        }}
      />
      <Spacer height={16} />
      <Button loading={loading} onClick={handleAddCase}>
        add testcase
      </Button>
      <Spacer height={32} />
    </>
  );
};

export default observer(AddTestCaseForm);
