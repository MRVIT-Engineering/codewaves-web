import styled from "styled-components";
import Wrapper from "../containers/Wrapper";
import Hamburger from "./Hamburger";
import logoBig from "../../assets/images/logos/logo-big.png";
import logoSmall from "../../assets/images/logos/logo-small.svg";
import { ScreenSize } from "../../constants/media-queries/mediaQueris";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

const StyledContainer = styled.header<{ isScrolled: boolean }>`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${(props) => (props.isScrolled ? "var(--light-shadow)" : "none")};
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

const NavList = styled.ul`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${ScreenSize.small} {
    display: none;
  }
`;

const StyledListItem = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }

  a {
    transition: color 0.4s;
    font-size: 1.6rem;

    &:hover {
      color: var(--primary);
    }
  }
`;

function HomepageNav() {
  const [isScrolled, toggleScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) toggleScroll(true);
      else toggleScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledContainer isScrolled={isScrolled}>
      <Wrapper>
        <LogoBig alt="Codewaves.io logo." />
        <LogoSmall alt="Codewaves.io logo." />
        <nav>
          <NavList>
            <StyledListItem>
              <Link to="/">Get Started</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="/">Contact Us</Link>
            </StyledListItem>
          </NavList>
          <Hamburger />
        </nav>
      </Wrapper>
    </StyledContainer>
  );
}

export default observer(HomepageNav);
