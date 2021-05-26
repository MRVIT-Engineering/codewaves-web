import React from "react";
import styled from "styled-components";
// import { props.colorTheme } from "../../../constants/colors/editorReplicaprops.colorTheme";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "var(--monakai-bg)"};
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

export const CodeEditorReplica = (props) => {
  return (
    <StyledContainer bgColor={props.codeEditorTheme}>
      <CodeRow>
        <CodeLine width="20" color={props.colorTheme.grey} />
        <CodeLine width="14" color={props.colorTheme.grey} />
      </CodeRow>
      <CodeRow>
        <CodeLine width="17" color={props.colorTheme.grey} />
        <CodeLine width="9" color={props.colorTheme.grey} />
        <CodeLine width="12" color={props.colorTheme.grey} />
      </CodeRow>

      {/* We use CodeRow as a separator. 
      No use in another component as this is just for visual effects */}
      <CodeRow />
      <CodeRow>
        <CodeLine width="20" color={props.colorTheme.pink} />
        <CodeLine width="15" color={props.colorTheme.grey} />
        <CodeLine width="18" color={props.colorTheme.grey} />
      </CodeRow>
      <CodeRow>
        <CodeLine width="17" color={props.colorTheme.pink} />
        <CodeLine width="12" color={props.colorTheme.grey} />
        <CodeLine width="15" color={props.colorTheme.grey} />
      </CodeRow>
      <CodeRow>
        <CodeLine width="19" color={props.colorTheme.pink} />
        <CodeLine width="24" color={props.colorTheme.blue} />
      </CodeRow>
      <CodeRow>
        <CodeLine width="20" color={props.colorTheme.grey} />
        <CodeLine width="45" color={props.colorTheme.grey} />
      </CodeRow>

      <CodeRow />

      <CodeRow>
        <CodeLine width="22" color={props.colorTheme.pink} />
        <CodeLine width="16" color={props.colorTheme.purple} />
        <CodeLine width="15" color={props.colorTheme.blue} />
        <CodeLine width="25" color={props.colorTheme.yellow} />
      </CodeRow>
      <CodeRow>
        <CodeLine width="17" color={props.colorTheme.pink} />
        <CodeLine width="12" color={props.colorTheme.green} />
        <CodeLine width="15" color={props.colorTheme.yellow} />
      </CodeRow>
      <CodeRow />
      <CodeRow>
        <CodeLine width="20" color={props.colorTheme.pink} />
        <CodeLine width="15" color={props.colorTheme.yellow} />
        <CodeLine width="18" color={props.colorTheme.grey} />
      </CodeRow>
      <CodeRow>
        <CodeLine width="15" color={props.colorTheme.pink} />
        <CodeLine width="10" color={props.colorTheme.blue} />
        <CodeLine width="14" color={props.colorTheme.grey} />
      </CodeRow>
      <CodeRow />

      <CodeRow>
        <CodeLine width="18" color={props.colorTheme.pink} />
        <CodeLine width="12" color={props.colorTheme.green} />
      </CodeRow>
    </StyledContainer>
  );
};
