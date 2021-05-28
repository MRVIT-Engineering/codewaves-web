import styled from "styled-components";
import { ScreenSize } from "../../constants/media-queries/mediaQueris";

interface HeadlineProps {
  noMarginBottom?: boolean;
}

export const Headline = styled.h1<HeadlineProps>`
  font-size: 4rem;
  margin-bottom: ${(props) => (props.noMarginBottom ? "0" : "15px")};

  ${ScreenSize.small} {
    font-size: 3rem;
  }

  .dot {
    color: var(--primary);
  }
`;
