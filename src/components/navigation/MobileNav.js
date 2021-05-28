import React from "react";
import styled from "styled";
import smallLogo from "../../assets/images/logos/logo-small.svg";

const StyledContainer = styled.header`
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
`;

export default function MobileNavBar() {
  return <StyledContainer></StyledContainer>;
}
