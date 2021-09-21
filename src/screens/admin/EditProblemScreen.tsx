import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Headline } from '../../components/typography/Headlines';
import { Separator } from '../../components/common/Separator';
import { Spacer } from '../../components/common/Spacer';
import { useStore } from '../../hooks/useStore';
import AddTestCases from '../../components/forms/AddTestCases';

const StyledContainer = styled.div`
  width: 700px;
`;

const EditProblemScreen = ({ match }: any) => {
  const {
    problemsStore: {
      getProblemById,
      currentProblem: { name, sphereEngineId },
    },
  } = useStore();

  useEffect(() => {
    (async () => {
      // the initial value is -1 so we can be sure currentProblem is not set
      if (sphereEngineId === -1) {
        await getProblemById(match.params.id);
      }
    })();
  }, []);

  return (
    <StyledContainer>
      <Breadcrumbs mainSection={'Dashboard'} crumbs={['Problems', name, 'Edit']} />
      <Headline>{name}</Headline>
      <Separator />
      <Spacer height={16} />
      <AddTestCases />
    </StyledContainer>
  );
};

export default withRouter(observer(EditProblemScreen));
