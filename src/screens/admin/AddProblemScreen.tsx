import { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router';

import { STATUS_CODES } from '../../constants/statusCodes/StatusCodes';
import { Routes } from '../../constants/routes';

import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Headline } from '../../components/typography/Headlines';
import { Separator } from '../../components/common/Separator';
import { TextInput } from '../../components/control/TextInput';
import { Button } from '../../components/buttons/PrimaryButton';
import { Spacer } from '../../components/common/Spacer';
import { Textarea } from '../../components/control/Textarea';
import { useStore } from '../../hooks/useStore';

const StyledContainer = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

const InputsContainer = styled.div`
  width: 550px;
`;

const AddProblemScreen = () => {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const {
    problemsStore: { createSphereEngineProblem, createCodewavesProblem, loading },
  } = useStore();

  const handleAddProblem = async () => {
    try {
      const SPProblem = await createSphereEngineProblem({ name, body });
      if (!SPProblem) throw new Error('Something went wrong with Spher Engine.');

      const { status, data } = await createCodewavesProblem({
        name,
        content: body,
        sphereEngineId: SPProblem.id,
      });

      if (status === STATUS_CODES.success) {
        enqueueSnackbar('Problem added succesfully!', { variant: 'success' });
        history.push(`${Routes.AdminEditProblem}/${data._id}`);
      } else {
        enqueueSnackbar('Problem not added!', { variant: 'error' });
      }
    } catch (error) {
      enqueueSnackbar('Problem not added!', { variant: 'error' });
    }
  };

  return (
    <StyledContainer>
      <Breadcrumbs mainSection={'Dashboard'} crumbs={['Add Problem']} />
      <Headline>Create New Problem</Headline>
      <Separator />
      <Spacer height={16} />
      <InputsContainer>
        <TextInput
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          placeholder={"Enter problem's name"}
        />
        <Textarea
          placeholder={"Enter problem's body"}
          value={body}
          onChange={e => {
            setBody(e.target.value);
          }}
        />
        <Spacer height={16} />
        <Button loading={loading} onClick={handleAddProblem}>
          Create SP Problem
        </Button>
      </InputsContainer>
    </StyledContainer>
  );
};

export default observer(AddProblemScreen);
