import styled from "styled-components";

export interface TextInputProps {
  error?: boolean;
  errorText?: string;
}

export const TextInput = styled.input<TextInputProps>`
  width: 100%;
  height: 45px;
  background-color: var(--background-grey);
  outline: none;
  border: none;
  border: 2px solid
    ${(props) => (props.error ? "var(--danger)" : "transparent")};
  border-radius: var(--border-radius);
  padding-left: 30px;
  font-family: "PT Mono", sans-serif;
  color: var(--custom-black);
  margin-top: 25px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  &::placeholder,
  &::-ms-input-placeholder,
  &:-ms-input-placeholder {
    color: var(--placeholder-grey);
    font-weight: bold;
  }
`;
