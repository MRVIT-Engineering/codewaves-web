import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { ScreenSize } from '../../constants/media-queries/mediaQueris';

import { useStore } from '../../hooks/useStore';
import Wrapper from '../containers/Wrapper';
import { Headline } from '../typography/Headlines';
import { Separator } from '../common/Separator';
import { TextInput } from '../control/TextInput';
import { Checkbox } from '../control/Checkbox';
import { GreyParagraph } from '../common/Paragraph';
import { Spacer } from '../common/Spacer';
import { Button } from '../buttons/PrimaryButton';
import { GoogleButton } from '../buttons/GoogleButton';
import { showNotification } from '../../services/notifications';
import { Routes } from '../../constants/routes';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFormContainer = styled.div`
  width: 450px;
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

const ErrorContainer = styled.div`
  width: 100%;
  border-radius: var(--border-radius);
  padding: 16px;
  background-color: var(--danger-contrast-light);
  color: var(--danger);
`;

const LoginForm = () => {
  const [isRememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authStore } = useStore();
  const history = useHistory();

  const login = async () => {
    if (email === '' || password === '') return authStore.setEmptyFieldsError();

    const response = await authStore.login(email, password);

    if (response.data.accountNotActive)
      return showNotification('Account not activated', response.data.message, 'top-right', 'danger');

    if (!response.data.wrongAuthCredentials) {
      history.push(Routes.CourseLibrary);
    }
  };

  const toggler = () => {
    setRememberMe(!isRememberMe);
  };

  return (
    <StyledContainer>
      <Wrapper>
        <StyledFormContainer>
          <Headline>Login</Headline>
          <Separator />
          <Spacer height={25} />
          {authStore.loginError ? <ErrorContainer>{authStore.loginErrorMessage}</ErrorContainer> : null}
          <TextInput
            onChange={e => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email or username"
          />
          <TextInput
            onChange={e => {
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
          <GoogleButton fullWidth>Login with google</GoogleButton>
          <GreyParagraph>or</GreyParagraph>
          <Link to="/register">Create a new account</Link>
        </StyledFormContainer>
      </Wrapper>
    </StyledContainer>
  );
};

export default observer(LoginForm);
