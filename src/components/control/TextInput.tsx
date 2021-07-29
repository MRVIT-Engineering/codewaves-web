import styled from 'styled-components';

export interface TextInputProps {
  error?: boolean;
  errorText?: string;
  noMargin?: boolean;
}

export const TextInput = styled.input<TextInputProps>`
  width: 100%;
  height: 60px;
  background-color: var(--background-grey);
  outline: none;
  border: none;
  border: 2px solid ${props => (props.error ? 'var(--danger)' : 'transparent')};
  border-radius: var(--border-radius);
  padding-left: 30px;
  font-family: 'PT Mono', sans-serif;
  font-size: 1.6rem;
  color: var(--custom-black);
  margin-top: ${props => (props.noMargin ? '0' : '16px')};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  &:focus {
    border-color: var(--primary);
  }

  &::placeholder,
  &::-ms-input-placeholder,
  &:-ms-input-placeholder {
    color: var(--placeholder-grey);
    font-weight: bold;
  }
`;
