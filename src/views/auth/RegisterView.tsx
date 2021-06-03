import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Headline } from "../../components/common/Headline";
import { Separator } from "../../components/common/Separator";
import { Spacer } from "../../components/common/Spacer";
import { Button } from "../../components/buttons/PrimaryButton";
import { GoogleButton } from "../../components/buttons/GoogleButton";
import { TextInput } from "../../components/control/TextInput";
import { GreyParagraph } from "../../components/common/Paragraph";
import { Link } from "react-router-dom";
import { StyledContainer, StyledFormContainer, Row } from "./LoginView";

const Half = styled.div`
  width: calc(50% - 12.5px);
  margin-right: 12.5px;

  &:nth-child(2) {
    margin-right: 0;
    margin-left: 12.5px;
  }
`;

const RegisterView = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputWithError, setInputWithError] = useState(-1);

  const validateInputs = () => {
    if (firstName === "") return setInputWithError(0);
    if (lastName === "") return setInputWithError(1);
    if (email === "") return setInputWithError(2);
    if (username === "") return setInputWithError(3);
    if (password === "") return setInputWithError(4);
    if (confirmPassword === "") return setInputWithError(5);
    if (password !== confirmPassword) return setInputWithError(5);
    return true;
  };

  const register = () => {
    if (validateInputs()) {
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
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </Half>
          <Half>
            <TextInput
              error={inputWithError === 1}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
            />
          </Half>
        </Row>
        <TextInput
          error={inputWithError === 2}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email address"
          type="email"
        />
        <TextInput
          error={inputWithError === 3}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
        />
        <TextInput
          error={inputWithError === 4}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          type="password"
        />
        <TextInput
          error={inputWithError === 5}
          onChange={(e) => {
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
        <GoogleButton fullWidth onClick={() => {}}>
          register with google
        </GoogleButton>
        <GreyParagraph>or</GreyParagraph>
        <Link to="/login">Login with existing account.</Link>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default observer(RegisterView);
