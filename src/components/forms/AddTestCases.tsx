import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useSnackbar } from 'notistack';
import styled from 'styled-components';

import { STATUS_CODES } from '../../constants/statusCodes/StatusCodes';
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
  const [timelimit, setTimelimit] = useState('5');
  const { enqueueSnackbar } = useSnackbar();

  const {
    problemsStore: {
      addSPTestCase,
      addProblemTestCase,
      loading,
      currentProblem: { sphereEngineId, _id },
    },
  } = useStore();

  const resetFields = () => {
    setInput('');
    setOutput('');
    setTimelimit('5');
  };

  const handleAddCase = async () => {
    const spStatus = await addSPTestCase({ input, output, timelimit: +timelimit });
    if (spStatus === STATUS_CODES.success) {
      const status = await addProblemTestCase({ input, output, timelimit: +timelimit }, _id!);
      if (status === STATUS_CODES.success) {
        enqueueSnackbar('New test case added!', { variant: 'success' });
        resetFields();
      }
    }
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
