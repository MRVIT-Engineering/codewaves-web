import styled from 'styled-components';
import classes from '../../../assets/css/Homepage.module.css';
import { Separator } from '../../common/Separator';
import { ScreenSize } from '../../../constants/media-queries/mediaQueris';

const StyledContainer = styled.div`
  width: 250px;
  height: 120px;
  border-radius: var(--border-radius);
  background-color: white;
  box-shadow: var(--light-shadow);
  position: absolute;
  bottom: -40px;
  left: -30px;
  padding: 15px;

  ${ScreenSize.small} {
    width: 220px;
    height: 90px;
  }
`;

const QuestionReplicaTitle = styled.p`
  font-size: 1.6rem;
  margin: 0;
  margin-bottom: 5px;
`;

const QuestionReplicaText = styled.p`
  font-size: 1.2rem;
  color: var(--placeholder-grey);

  ${ScreenSize.small} {
    width: 220px;
    height: 90px;
    display: none;
  }
`;

const QuestionReplicaDate = styled.p`
  font-size: 1.2rem;
  color: var(--primary);
`;

export default function QuestionReplica() {
  return (
    <div className={classes.QuestionReplica}>
      <p className={classes.QuestionReplicaTitle}>John Snow</p>
      <Separator />
      <p className={classes.QuestionReplicaText}>Who is guarding the wall?</p>
      <p className={classes.QuestionReplicaDate}>12/12/1000</p>
    </div>
  );
}

export const QuestionReplicaComp = () => (
  <StyledContainer>
    <QuestionReplicaTitle>John Snow</QuestionReplicaTitle>
    <Separator />
    <QuestionReplicaText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</QuestionReplicaText>
    <QuestionReplicaDate>12/12/1000</QuestionReplicaDate>
  </StyledContainer>
);
