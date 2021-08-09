import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { Quizz } from '../../models/Quizz';
import { STATUS_CODES } from '../../constants/statusCodes/StatusCodes';
import { Routes } from '../../constants/routes';

import { RowWithWrap, StyledCard } from '../../utils/style/styledComponents';
import { Headline } from '../../components/typography/Headlines';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Separator } from '../../components/common/Separator';
import { useStore } from '../../hooks/useStore';
import { Spacer } from '../../components/common/Spacer';

const StyledContainer = styled.div`
  width: 600px;
`;

export const AdminQuizzesScreen = () => {
  const [quizzes, setQuizzes] = useState<Quizz[]>([]);
  const history = useHistory();
  const {
    quizzStore: { getQuizzes },
  } = useStore();

  useEffect(() => {
    (async () => {
      const { status, data } = await getQuizzes();
      if (status === STATUS_CODES.success) {
        setQuizzes(data);
      } else {
        alert('Could not fetch the quizzes');
      }
    })();
  }, []);

  return (
    <>
      <StyledContainer>
        <Breadcrumbs mainSection={'Dashboard'} crumbs={['Quizzes']} />
        <Headline>Codewaves Quizzes</Headline>
        <Separator />
      </StyledContainer>
      <Spacer height={32} />
      <RowWithWrap>
        {quizzes.map((q, index) => (
          <StyledCard
            onClick={() => {
              history.push(`${Routes.QuizzPreview}/${q._id}`);
            }}
            key={index}
          >
            {q.title}
          </StyledCard>
        ))}
      </RowWithWrap>
    </>
  );
};
