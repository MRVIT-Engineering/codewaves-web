import styled from "styled-components";

const PrimaryButton = styled.button`
  min-width: 200px;
  width: ${props => props.long ? `100%` : ``};
  height: 60px;
  background-color: ${props => props.buttonRed ? `var(--danger)` : `var(--primary)`};
  color: white;
  outline: none;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "PT Mono", sans-serif;
  font-size: 1.6rem;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--light-shadow);
    background-color: ${props => props.buttonRed ? `var(--danger-dark)` : `var(--primary-dark)`};
  }
`;

export default function Button(props) {
  return (
    <PrimaryButton onClick={props.onClick} long={props.long} buttonRed={props.buttonRed}>{props.children}</PrimaryButton>
  );
}
