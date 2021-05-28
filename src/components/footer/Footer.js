import styled from "styled-components";
import Wrapper from "../containers/Wrapper";
import heart from "../../assets/images/footer/heart.svg";
import energyDrink from "../../assets/images/footer/energy-drink.svg";
import { GreyParagraph } from "../common/Paragraph";
import { Link } from "react-router-dom";
import { ScreenSize } from "../../constants/media-queries/mediaQueris";

const StyledContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${ScreenSize.medium} {
    flex-flow: column nowrap;
    margin-bottom: 50px;
  }
`;

const Colored = styled.span`
  color: var(--primary);
`;

const HeartImage = styled.img.attrs({ src: heart })`
  height: 25px;
  width: auto;
`;

const EnergyDrinkImage = styled.img.attrs({ src: energyDrink })`
  height: 25px;
  width: auto;
`;

const LinkWrapper = styled.span`
  transition: color 0.4s;

  ${ScreenSize.medium} {
    &:last-child {
      margin-right: 25px;
    }
  }

  &:hover {
    color: var(--primary);
  }

  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <GreyParagraph>
          <Colored>Codewaves.io</Colored> built with <HeartImage /> and lots of{" "}
          <EnergyDrinkImage /> .
        </GreyParagraph>
        <div>
          <LinkWrapper>
            <Link to="/tos">Tearms Of Service</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </LinkWrapper>
        </div>
      </StyledContainer>
    </Wrapper>
  );
};
