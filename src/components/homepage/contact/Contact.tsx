import styled from 'styled-components';
import { useState } from 'react';
import { Headline } from '../../common/Headline';
import { Separator } from '../../common/Separator';
import { TextInput } from '../../control/TextInput';
import { Textarea } from '../../control/Textarea';
import { Button } from '../../buttons/PrimaryButton';
import { Spacer } from '../../common/Spacer';
import Wrapper from '../../containers/Wrapper';

const StyledContainer = styled.div`
  padding: 200px 0%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

const ErrorLabel = styled.label`
  color: var(--danger);
  text-align: left;
  margin: 5px 0 0 5px;
  align-self: flex-start;
`;

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState({ error: false, text: '' });
  const [messageError, setMessageError] = useState({
    error: false,
    text: '',
  });

  const clearFieldErrors = () => {
    setEmailError({ error: false, text: '' });
    setMessageError({ error: false, text: '' });
  };

  const validatedFields = () => {
    if (email === '') return setEmailError({ error: true, text: 'You missed this one!' });
    if (message === '')
      return setMessageError({
        error: true,
        text: 'What would you like to chat about?',
      });
    return true;
  };

  const sendMessage = () => {
    clearFieldErrors();
    if (validatedFields()) {
      console.log('Sending motherfucking messages my dudes!');
    }
  };

  return (
    <StyledContainer>
      <Wrapper>
        <StyledForm>
          <Headline>Contact Us</Headline>
          <Separator />
          <TextInput
            error={emailError.error}
            errorText={emailError.text}
            onChange={e => {
              setEmail(e.target.value);
            }}
            placeholder="Your email address"
          />
          {emailError.error ? <ErrorLabel>{emailError.text}</ErrorLabel> : null}
          <Textarea
            error={messageError.error}
            errorText={messageError.text}
            onChange={e => {
              setMessage(e.target.value);
            }}
            placeholder="Tell us what's on your mind"
          />
          {messageError.error ? <ErrorLabel>{messageError.text}</ErrorLabel> : null}
          <Spacer height={25} />
          <Button onClick={sendMessage}>SEND MESSAGE</Button>
        </StyledForm>
      </Wrapper>
    </StyledContainer>
  );
}
