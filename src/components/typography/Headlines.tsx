import styled from 'styled-components';

import { ScreenSize } from '../../constants/media-queries/mediaQueris';

export const Headline = styled.h1`
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
  font-size: 3rem;

  ${ScreenSize.small} {
    font-size: 3rem;
  }
`;

export const HeadlineSmall = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  margin-bottom: 16px;

  ${ScreenSize.small} {
    font-size: 1.6rem;
  }
`;
