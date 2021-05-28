import styled from "styled-components";
import Hamburger from "hamburger-react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";
import { ScreenSize } from "../../constants/media-queries/mediaQueris";

const StyledContainer = styled.div`
  display: none;
  ${ScreenSize.small} {
    display: block;
  }
`;

const HamburgerBtn = () => {
  const { appStateStore } = useStore();
  const { isDrawerOpened, toggleDrawer } = appStateStore;

  return (
    <StyledContainer>
      <Hamburger toggled={isDrawerOpened} toggle={toggleDrawer} />
    </StyledContainer>
  );
};

export default observer(HamburgerBtn);
