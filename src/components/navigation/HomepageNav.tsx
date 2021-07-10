import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';

import { ScreenSize } from '../../constants/media-queries/mediaQueris';

import Wrapper from '../containers/Wrapper';
import Hamburger from './Hamburger';
import logoBig from '../../assets/images/logos/logo-big.png';
import logoSmall from '../../assets/images/logos/logo-small.svg';
import { HomepageList } from './lists/HomepageList';
import { AppList } from './lists/AppList';

const StyledContainer = styled.header<{ isScrolled: boolean }>`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => (props.isScrolled ? 'var(--light-shadow)' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: var(--z-index-middle);
`;

const LogoBig = styled.img.attrs({ src: logoBig })`
  height: 50px;
  width: auto;

  ${ScreenSize.small} {
    display: none;
  }
`;

const LogoSmall = styled.img.attrs({ src: logoSmall })`
  height: 30px;
  width: auto;
  display: none;

  ${ScreenSize.small} {
    display: block;
  }
`;

interface HomepageNavPorps {
  appView?: boolean;
}

function HomepageNav(props: HomepageNavPorps) {
  const [isScrolled, toggleScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) toggleScroll(true);
      else toggleScroll(false);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledContainer isScrolled={isScrolled}>
      <Wrapper>
        <LogoBig alt="Codewaves.io logo." />
        <LogoSmall alt="Codewaves.io logo." />
        <nav>
          {props.appView ? <AppList /> : <HomepageList />}
          <Hamburger />
        </nav>
      </Wrapper>
    </StyledContainer>
  );
}

export default observer(HomepageNav);
