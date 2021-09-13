import styled from 'styled-components';
import { BiDuplicate } from 'react-icons/bi';
import { MdOpenInBrowser } from 'react-icons/md';

import Iframe from './Iframe';
import Icon from '../icon/Icon';
import { PrimaryText, GreyText } from '../../utils/style/styledComponents';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 55px;
  padding-left: 16px;
  background-color: var(--custom-grey);
  display: flex;
  align-items: center;
`;

const StyledInput = styled.div`
  height: 35px;
  width: 80%;
  margin-left: 16px;
  padding: 0 16px 0 16px;
  background-color: white;
  border: none;
  border-radius: 30px;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
`;

export const Browser = () => (
  <StyledContainer>
    <SearchContainer>
      <Icon
        size={24}
        onClick={() => {
          console.log('Open in new tab.');
        }}
        icon={<MdOpenInBrowser />}
      />
      <StyledInput>
        <StyledParagraph>
          <PrimaryText>https://</PrimaryText>codewaves.io/
          <GreyText>playgrounds/play_sdad978d18d198</GreyText>
        </StyledParagraph>
        <Icon
          onClick={() => {
            console.log('URL copied to clipboard');
          }}
          icon={<BiDuplicate />}
        />
      </StyledInput>
    </SearchContainer>
    <Iframe id="web-preview" />
  </StyledContainer>
);
