import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import { TestCase } from '../../models/Problems/TestCase';

import AddTestCases from '../../components/forms/AddTestCases';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Headline, HeadlineSmall } from '../../components/typography/Headlines';
import { Separator } from '../../components/common/Separator';
import { Spacer } from '../../components/common/Spacer';
import { useStore } from '../../hooks/useStore';

const StyledContainer = styled.div`
  width: 700px;
`;

const EditProblemScreen = ({ match }: any) => {
  const {
    problemsStore: {
      getProblemById,
      currentProblem: { name, sphereEngineId, testCases },
    },
  } = useStore();

  useEffect(() => {
    (async () => {
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

      <Spacer height={32} />
      <HeadlineSmall>Testcases</HeadlineSmall>

      {/* <MTable columns={['#', 'Input', 'Output', 'Timelimit']} rows={testCases!} /> */}

      {testCases &&
        testCases.map((t: TestCase, index: number) => {
          return <p key={t.input}>{`#${index}   ------------  ${t.input} ------------ ${t.output}`}</p>;
        })}
    </StyledContainer>
  );
};

export default withRouter(observer(EditProblemScreen));
