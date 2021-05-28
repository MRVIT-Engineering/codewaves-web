import styled from "styled-components";

interface HeadlineProps {
  noMarginBottom?: boolean;
}

export const Headline = styled.h1<HeadlineProps>`
  font-size: 4rem;
  margin-bottom: ${(props) => (props.noMarginBottom ? "0" : "15px")};

  .dot {
    color: var(--primary);
  }
`;
