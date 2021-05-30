import styled from "styled-components";

export const GreyParagraph = styled.p<{ noMargin?: boolean }>`
  color: var(--placeholder-grey);
  margin: ${(props) => (props.noMargin ? "0" : "25px 0")};
`;

export const WhiteParagraph = styled.p`
  color: white;
  margin: 25px 0;
`;
