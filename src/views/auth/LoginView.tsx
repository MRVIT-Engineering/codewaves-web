import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextInput } from "../../components/control/TextInput";
import { Spacer } from "../../components/common/Spacer";
import { Separator } from "../../components/common/Separator";
import { Button } from "../../components/buttons/PrimaryButton";
import { GoogleButton } from "../../components/buttons/GoogleButton";
import { Headline } from "../../components/common/Headline";
import { GreyParagraph } from "../../components/common/Paragraph";
import { Checkbox } from "../../components/control/Checkbox";
import { Link } from "react-router-dom";
import { ScreenSize } from "../../constants/media-queries/mediaQueris";
import { useStore } from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import { withLoading } from "../../components/hoc/withLoading";
import Wrapper from "../../components/containers/Wrapper";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFormContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  ${ScreenSize.small} {
    width: 100%;
  }
`;

export const Row = styled.div`
  width: 100%;
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

const LoginView = () => {
  const [isRememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authStore } = useStore();
  const history = useHistory();

  const toggler = () => {
    setRememberMe(!isRememberMe);
  };

  const login = async () => {
    let response = await authStore.login(email, password);
    // console.log(response);
    if (!response.data.wrongCredentials) history.push("/learning");
    else {
      // TODO: implement logic for
    }
  };

  const googleLogin = async () => {
    const loginUrl = "http://localhost:8081/auth/login_google";
    const newWindow = window.open(loginUrl, "_blank", "width=500,height=600");
    // authStore.loginWithGoogle();
  };

  return (
    <StyledContainer>
      <Wrapper>
        <StyledFormContainer>
          <Headline>Login</Headline>
          <Separator />
          <TextInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email or username"
          />
          <TextInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Your password"
          />
          <Spacer height={25} />

          <Row>
            <SecondaryRow>
              <Checkbox value={isRememberMe} toggler={toggler} />
              <GreyParagraph noMargin> Remember me</GreyParagraph>
            </SecondaryRow>

            <Link to="forgot-password">Forgot password</Link>
          </Row>

          <Spacer height={25} />
          <Button fullWidth onClick={login}>
            LOGIN
          </Button>
          <Spacer height={25} />
          <GoogleButton fullWidth onClick={googleLogin}>
            Login with google
          </GoogleButton>
          <GreyParagraph>or</GreyParagraph>
          <Link to="/register">Create a new account</Link>
        </StyledFormContainer>
      </Wrapper>
    </StyledContainer>
  );
};

export default withLoading(observer(LoginView));
