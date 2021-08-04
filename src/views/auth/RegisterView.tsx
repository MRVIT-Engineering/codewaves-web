import styled from 'styled-components';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory, Link } from 'react-router-dom';

import { Routes } from '../../constants/routes';

import { Headline } from '../../components/typography/Headlines';
import { Separator } from '../../components/common/Separator';
import { Spacer } from '../../components/common/Spacer';
import { Button } from '../../components/buttons/PrimaryButton';
import { GoogleButton } from '../../components/buttons/GoogleButton';
import { TextInput } from '../../components/control/TextInput';
import { GreyParagraph } from '../../components/common/Paragraph';
import { useStore } from '../../hooks/useStore';
import { withLoading } from '../../components/hoc/withLoading';
import { StyledContainer, StyledFormContainer, Row } from '../../components/login/LoginForm';
import { showNotification } from '../../services/notifications';

const Half = styled.div`
  width: calc(50% - 12.5px);
  margin-right: 12.5px;

  &:nth-child(2) {
    margin-right: 0;
    margin-left: 12.5px;
  }
`;

const RegisterView = () => {
  const { authStore } = useStore();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputWithError, setInputWithError] = useState(-1);
  const history = useHistory();

  const validateInputs = () => {
    if (firstName === '') return setInputWithError(0);
    if (lastName === '') return setInputWithError(1);
    if (email === '') return setInputWithError(2);
    if (password === '') return setInputWithError(4);
    if (confirmPassword === '') return setInputWithError(5);
    if (password !== confirmPassword) return setInputWithError(5);
    return true;
  };

  const register = async () => {
    if (validateInputs()) {
      const response = await authStore.register(firstName, lastName, email, password);
      if (response.status === 200) {
        showNotification(
          'Great!',
          'Check your email for your confirmation link in order to get started!',
          'top-right',
          'success'
        );
        history.push(Routes.Login);
      } else
        showNotification(
          'Oh no...',
          'Something went wrong with your registration. We are on it? Please try again later',
          'top-right',
          'danger'
        );
    }
  };

  return (
    <StyledContainer>
      <StyledFormContainer>
        <Headline>Register</Headline>
        <Separator />
        <Row>
          <Half>
            <TextInput
              error={inputWithError === 0}
              onChange={e => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </Half>
          <Half>
            <TextInput
              error={inputWithError === 1}
              onChange={e => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
            />
          </Half>
        </Row>
        <TextInput
          error={inputWithError === 2}
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder="Email address"
          type="email"
        />
        <TextInput
          error={inputWithError === 4}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          type="password"
        />
        <TextInput
          error={inputWithError === 5}
          onChange={e => {
            setConfirmPassword(e.target.value);
          }}
          placeholder="Confirm password"
          type="password"
        />
        <Spacer height={25} />
        <Button fullWidth onClick={register}>
          create account
        </Button>
        <Spacer height={25} />
        <GoogleButton fullWidth>register with google</GoogleButton>
        <GreyParagraph>or</GreyParagraph>
        <Link to="/login">Login with existing account.</Link>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default withLoading(observer(RegisterView));
