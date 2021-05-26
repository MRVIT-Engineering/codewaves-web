import styled from "styled-components";

const PrimaryButton = styled.button`
  min-width: 200px;
  height: 60px;
  background-color: var(--primary);
  color: white;
  outline: none;
  border: none;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  cursor: pointer;
  font-family: "PT Mono", sans-serif;
  font-size: 1.6rem;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--light-shadow);
    background-color: var(--primary-dark);
  }
`;

export const Button = (props) => {
  return (
    <PrimaryButton onClick={props.onClick}>{props.children}</PrimaryButton>
  );
};
