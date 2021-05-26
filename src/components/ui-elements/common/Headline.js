import styled from "styled-components";

export const Headline = styled.h1`
  font-size: 4rem;
  margin-bottom: ${(props) => (props.noMarginBottom ? "0" : "15px")};

  .dot {
    color: var(--primary);
  }
`;
