import styled from "styled-components";
import { useStore } from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Wrapper from "../../components/containers/Wrapper";
import logoWhite from "../../assets/images/logos/logo-small-white.png";

const StyledDrawer = styled.div<{ visible: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: var(--primary);
  box-shadow: var(--light-shadow);
  position: fixed;
  top: ${(props) => (props.visible ? 0 : "-100vh")};
  left: ${(props) => (props.visible ? 0 : "-100vh")};
  clip-path: ellipse(75% 80vh at 5% 3%);
  z-index: var(--z-index-top);
  transition: all 0.4s;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledNav = styled.nav`
  width: 70%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column nowrap;
  margin-top: 20%;
`;

const Anchor = styled.a`
  color: white;
  font-size: 3.5rem;
`;

const Logo = styled.img.attrs({ src: logoWhite })`
  height: 55px;
  width: auto;
`;

const DrawerComponent = () => {
  const {
    appStateStore: { isDrawerOpened },
  } = useStore();
  return (
    <StyledDrawer visible={isDrawerOpened}>
      <StyledContainer>
        <Wrapper>
          <Logo />
        </Wrapper>
      </StyledContainer>
      <StyledNav>
        {/* <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}> */}
        <Link to="/">
          <Anchor>Get Started</Anchor>
        </Link>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}> */}
        <Link to="/">
          <Anchor>Contact Us</Anchor>
        </Link>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}> */}
        <Link to="/">
          <Anchor>User Stories</Anchor>
        </Link>
        {/* </ScrollAnimation> */}
      </StyledNav>
    </StyledDrawer>
  );
};

export default observer(DrawerComponent);
