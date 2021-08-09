import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

import { STATUS_CODES } from '../../constants/statusCodes/StatusCodes';
import { QuizzFormData } from '../../constants/formData/QuizzFormData';
import { Quizz } from '../../models/Quizz';
import { QuizzOption } from '../../constants/types/QuizzOption';
import { QuizzOptionType } from '../../constants/enums/QuizzOptionType';

import { QuizzAnswerEditor } from '../../components/editor/QuizzAnserEditor';
import { Row } from '../../utils/style/styledComponents';
import { StyledCard } from '../../utils/style/styledComponents';
import { Headline } from '../../components/typography/Headlines';
import { PrimaryText } from '../../utils/style/styledComponents';
import { Separator } from '../../components/common/Separator';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { useStore } from '../../hooks/useStore';
import { Icon } from '../../components/icon/Icon';
import { Spacer } from '../../components/common/Spacer';

const StyledContainer = styled.div`
  width: 600px;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
`;

const StyledCodeCard = styled.div`
  width: 240px;
  height: 60px;
  border-radius: 8px;
  margin: 0 16px 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const QuizzPreviewScreen = ({ match }: any) => {
  const [quizz, setQuizz] = useState<Quizz>(QuizzFormData);
  const {
    quizzStore: { getQuizzById },
  } = useStore();

  useEffect(() => {
    (async () => {
      const { status, data } = await getQuizzById(match.params.id);
      if (status === STATUS_CODES.success) setQuizz(data);
      else alert('Something went wrong');
    })();
  }, []);

  const displayOptions = (options: QuizzOption[]) => {
    return options.map((o, index) => {
      console.log(o);
      return (
        <StyledRow key={index}>
          {o.correct ? (
            <Icon icon={<AiOutlineCheck />} size={30} color={'var(--success)'} />
          ) : (
            <Icon icon={<AiOutlineClose />} size={30} color={'var(--danger)'} />
          )}
          <Spacer width={16} />
          {o.type === QuizzOptionType.Text ? (
            <StyledCard> {o.text}</StyledCard>
          ) : (
            <StyledCodeCard>
              <QuizzAnswerEditor code={o.code || ''} mode={o.language} />
            </StyledCodeCard>
          )}
          <Spacer width={16} />
        </StyledRow>
      );
    });
  };

  return (
    <StyledContainer>
      <Breadcrumbs mainSection={'Dashboard'} crumbs={['Quizzes', 'Quizz Preview']} />
      <Headline>{quizz!.title}</Headline>
      <Separator />
      <p>
        <PrimaryText>Question</PrimaryText>: {quizz.question}
      </p>
      <Row>{displayOptions(quizz.options)}</Row>
    </StyledContainer>
  );
};

export default withRouter(QuizzPreviewScreen);
