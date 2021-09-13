import styled from 'styled-components';

import NotFoundImage from '../assets/images/404.png';
import { Footer } from '../components/footer/Footer';

const StyledContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 550px;
  height: auto;
`;

export const NotFoundScreen = () => {
  return (
    <>
      <StyledContainer>
        <StyledImage src={NotFoundImage} alt={'Page not found!'} />
      </StyledContainer>
      <Footer />
    </>
  );
};
