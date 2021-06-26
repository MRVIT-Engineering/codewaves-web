import styled from "styled-components";

import Editor from "../../components/editor/Codemirror";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Half = styled.div`
  width: 50%;
  height: 100vh;
`;

export const PlaygroundScreen = () => {
  return (
    <StyledContainer>
      <Half>
        <Editor theme="material" mode="jsx" />
      </Half>
      <Half>Here should be the output</Half>
    </StyledContainer>
  );
};
