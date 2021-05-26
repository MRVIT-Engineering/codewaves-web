import React from "react";
import styled from "styled-components";
import { lineColors } from "../../../constants/colors/editorReplicaLineColors";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  padding: 30px;
  border-radius: var(--border-radius);
`;

const CodeRow = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  display: flex;
  margin-bottom: 10px;
`;

const CodeLine = styled.div`
  height: 100%;
  border-radius: 5px;
  width: ${(props) => props.width + "%"};
  background-color: ${(props) => props.color};
  margin: 0 5px;
`;

export const TerminalReplica = () => {
  return (
    <StyledContainer>
      <CodeRow>
        <CodeLine width="15" color={lineColors.pink} />
        <CodeLine width="15" color={lineColors.white} />
        <CodeLine width="18" color={lineColors.white} />
      </CodeRow>
      <CodeRow>
        <CodeLine width="15" color={lineColors.pink} />
        <CodeLine width="12" color={lineColors.yellow} />
        <CodeLine width="15" color={lineColors.white} />
      </CodeRow>
      <CodeRow>
        <CodeLine width="15" color={lineColors.pink} />
        <CodeLine width="24" color={lineColors.white} />
      </CodeRow>
      <CodeRow>
        <CodeLine width="20" color={lineColors.white} />
        <CodeLine width="45" color={lineColors.white} />
      </CodeRow>

      <CodeRow />

      <CodeRow>
        <CodeLine width="15" color={lineColors.pink} />
        <CodeLine width="16" color={lineColors.white} />
        <CodeLine width="15" color={lineColors.green} />
        <CodeLine width="25" color={lineColors.white} />
      </CodeRow>
      <CodeRow>
        <CodeLine width="15" color={lineColors.pink} />
        <CodeLine width="12" color={lineColors.white} />
        <CodeLine width="15" color={lineColors.white} />
      </CodeRow>
      <CodeRow />
    </StyledContainer>
  );
};
