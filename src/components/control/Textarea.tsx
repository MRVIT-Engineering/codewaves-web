import styled from 'styled-components';
import { TextInputProps } from './TextInput'; // no need to declare the same interface here.

export const Textarea = styled.textarea<TextInputProps>`
  width: 100%;
  min-height: 250px;
  height: 45px;
  background-color: var(--background-grey);
  outline: none;
  border: none;
  border: 2px solid ${props => (props.error ? 'var(--danger)' : 'transparent')};
  border-radius: var(--border-radius);
  padding: 16px 0 0 30px;
  font-family: 'PT Mono', sans-serif;
  color: var(--custom-black);
  margin-top: 25px;
  font-size: 1.6rem;

  &:focus {
    border-color: var(--primary);
  }

  &::placeholder,
  &::-ms-input-placeholder,
  &:-ms-input-placeholder {
    color: var(--placeholder-grey);
  }
`;
