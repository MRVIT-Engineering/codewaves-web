import styled from "styled-components";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const StyledContainer = styled.div<{ value: boolean }>`
  font-size: 2.5rem;
  color: ${(props) => (props.value ? "var(--primary)" : "#ececec")};
  transition: all 0.4s;
  cursor: pointer;
`;

interface CheckboxProps {
  value: boolean;
  toggler: () => void;
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <StyledContainer value={props.value} onClick={props.toggler}>
      {props.value ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
    </StyledContainer>
  );
};
