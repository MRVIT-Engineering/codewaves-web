import styled from 'styled-components';

import { Headline } from '../../components/typography/Headlines';
import { Separator } from '../../components/common/Separator';

const StyledContainer = styled.div`
  max-width: 1900px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const CoursesView = () => (
  <StyledContainer>
    <Headline>Web Dev Library</Headline>
    <Separator />
  </StyledContainer>
);
