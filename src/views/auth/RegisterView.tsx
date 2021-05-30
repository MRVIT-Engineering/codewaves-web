import styled from "styled-components";
import { useState } from "react";
import { Headline } from "../../components/common/Headline";
import { Separator } from "../../components/common/Separator";
import { Spacer } from "../../components/common/Spacer";
import { Button } from "../../components/buttons/PrimaryButton";
import { GoogleButton } from "../../components/buttons/GoogleButton";
import { TextInput } from "../../components/control/TextInput";
import {
  StyledContainer,
  StyledFormContainer,
  StyledAnchor,
  Row,
} from "./LoginView";
import { GreyParagraph } from "../../components/common/Paragraph";

const Half = styled.div`
  width: calc(50% - 12.5px);
  margin-right: 12.5px;

  &:nth-child(2) {
    margin-right: 0;
    margin-left: 12.5px;
  }
`;

export const RegisterView = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <StyledContainer>
      <StyledFormContainer>
        <Headline>Register</Headline>
        <Separator />
        <Row>
          <Half>
            <TextInput
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </Half>
          <Half>
            <TextInput
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
            />
          </Half>
        </Row>
        <TextInput
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email address"
          type="email"
        />
        <TextInput
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
        />
        <TextInput
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          type="password"
        />
        <TextInput
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          placeholder="Confirm password"
          type="password"
        />
        <Spacer height={25} />
        <Button fullWidth onClick={() => {}}>
          create account
        </Button>
        <Spacer height={25} />
        <GoogleButton fullWidth onClick={() => {}}>
          register with google
        </GoogleButton>
        <GreyParagraph>or</GreyParagraph>
        <StyledAnchor>Login with existing account.</StyledAnchor>
      </StyledFormContainer>
    </StyledContainer>
  );
};
