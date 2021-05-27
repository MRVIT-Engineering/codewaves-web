import styled from "styled-components";
import { Link } from "react-router-dom";
import Wrapper from "../ui-elements/containers/Wrapper";
import { useState, useEffect } from "react";
import logoBig from "../../assets/images/logos/logo-big.png";

interface DesktopNavProps {
  isScrolled: boolean;
}

const StyledContainer = styled.header<DesktopNavProps>`
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
  z-index: 1000;

  img {
    height: 50px;
    width: auto;
  }
`;

const NavList = styled.ul`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

export default function HomepageNav() {
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
        <img src={logoBig} alt="Codewaves.io logo." />
        <nav>
          <NavList>
            <StyledListItem>
              <Link to="/">Get Started</Link>
            </StyledListItem>
            <StyledListItem>
              <Link to="/">Contact Us</Link>
            </StyledListItem>
          </NavList>
        </nav>
      </Wrapper>
    </StyledContainer>
  );
}
