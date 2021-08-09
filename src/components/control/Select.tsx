import styled from 'styled-components';
import { SelectOption } from '../../constants/types/SelectOption';

const StyledSelect = styled.select`
  width: 100%;
  height: 60px;
  background-color: var(--background-grey);
  outline: none;
  border: none;
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  padding-left: 30px;
  font-family: 'PT Mono', sans-serif;
  font-size: 1.6rem;
  color: var(--custom-black);
  margin-top: 25px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  align-items: center;

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

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (e: any) => void;
}

export const Select = ({ options, value, onChange }: SelectProps) => {
  return (
    <StyledSelect value={value} onChange={onChange}>
      <option value={''}>Choose an option</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
