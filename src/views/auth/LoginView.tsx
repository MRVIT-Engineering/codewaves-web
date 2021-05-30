import styled from "styled-components";
import { useState } from "react";
import { TextInput } from "../../components/control/TextInput";
import { Spacer } from "../../components/common/Spacer";
import { Separator } from "../../components/common/Separator";
import { Button } from "../../components/buttons/PrimaryButton";
import { GoogleButton } from "../../components/buttons/GoogleButton";
import { Headline } from "../../components/common/Headline";
import { GreyParagraph } from "../../components/common/Paragraph";
import { Checkbox } from "../../components/control/Checkbox";
import { Link } from "react-router-dom";
import Wrapper from "../../components/containers/Wrapper";
import { ScreenSize } from "../../constants/media-queries/mediaQueris";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFormContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  ${ScreenSize.small} {
    width: 100%;
  }
`;

const StyledAnchor = styled.a`
  color: var(--primary);
  transition: color 0.4s;
  cursor: pointer;

  &:hover {
    color: var(--primary-dark);
  }
`;

const Row = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const SecondaryRow = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginView = () => {
  const [isRememberMe, setRememberMe] = useState(false);
  const toggler = () => {
    setRememberMe(!isRememberMe);
  };

  return (
    <StyledContainer>
      <Wrapper>
        <StyledFormContainer>
          <Headline>Login</Headline>
          <Separator />
          <TextInput type="email" placeholder="Email or username" />
          <TextInput type="password" placeholder="Your password" />
          <Spacer height={25} />

          <Row>
            <SecondaryRow>
              <Checkbox value={isRememberMe} toggler={toggler} />
              <GreyParagraph noMargin> Remember me</GreyParagraph>
            </SecondaryRow>

            <Link to="forgot-password">
              <StyledAnchor>Forgot password</StyledAnchor>
            </Link>
          </Row>

          <Spacer height={25} />
          <Button fullWidth onClick={() => {}}>
            LOGIN
          </Button>
          <Spacer height={25} />
          <GoogleButton fullWidth onClick={() => {}}>
            Login with google
          </GoogleButton>
          <GreyParagraph>or</GreyParagraph>
          <Link to="/register">
            <StyledAnchor>Create a new account</StyledAnchor>
          </Link>
        </StyledFormContainer>
      </Wrapper>
    </StyledContainer>
  );
};
