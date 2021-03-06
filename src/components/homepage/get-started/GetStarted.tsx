import styled from 'styled-components';
import { Headline } from '../../typography/Headlines';
import { Button } from '../../buttons/PrimaryButton';
import { WhiteParagraph } from '../../common/Paragraph';
import { Dotted } from './Dotted';
import Wrapper from '../../containers/Wrapper';

const StyledContainer = styled.div`
  background-color: #140f2b;
  color: white;
  padding: 150px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  text-align: center;
`;

export default function GetStarted() {
  return (
    <StyledContainer>
      <Wrapper>
        <Dotted number={154} top="-70px" left="150px" />
        <Dotted number={154} bottom="-100px" right="150px" />
        <Headline>
          Add programming to your skillset<span className="dot">!</span>
        </Headline>
        <WhiteParagraph>
          Get started with <span style={{ color: 'var(--primary)' }}>Codewaves.io</span> today and try our
          basics web development courses for free!
        </WhiteParagraph>
        <Button onClick={() => {}}>Try it for free!</Button>
      </Wrapper>
    </StyledContainer>
  );
}
