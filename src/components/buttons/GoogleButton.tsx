import styled from "styled-components";
import { ButtonProps } from "./PrimaryButton";
import { FaGoogle } from "react-icons/fa";

const StyledButton = styled.button<{ fullWidth?: boolean }>`
  min-width: ${(props) => (props.fullWidth ? "100%" : " 200px")};
  height: 60px;
  background-color: #e73537;
  color: white;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  font-family: "PT Mono";
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s, background-color 0.4s, box-shadow 0.4s;
  text-transform: uppercase;

  &:hover {
    background-color: var(--danger-dark);
    box-shadow: var(--light-shadow);
    transform: translateY(-5px);
  }
`;

const StyledSpan = styled.span`
  color: white;
  font-size: 2rem;
  margin-right: 20px;
`;

export const GoogleButton = (props: ButtonProps) => {
  return (
    <StyledButton fullWidth={props.fullWidth}>
      <StyledSpan>
        <FaGoogle />{" "}
      </StyledSpan>
      {props.children}
    </StyledButton>
  );
};
