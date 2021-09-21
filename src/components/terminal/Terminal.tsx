import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Colors } from '../../constants/style/Colors';
import { Row } from '../../utils/style/styledComponents';

import { useStore } from '../../hooks/useStore';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2e3440;
`;

const TerminalContent = styled.div`
  flex: 1;
  max-height: calc(100vh - 50px);
  width: 100%;
  padding: 16px 0 0 16px;
  overflow: auto;
`;

const TabsContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #23282f;
  display: flex;
`;

const TabComp = styled.div<{ active?: boolean }>`
  width: 130px;
  height: 100%;
  background-color: ${props => (props.active ? '#2e3440' : '#303f44')};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TerminalHeader = styled.p`
  color: ${Colors.placeholderGrey};
  font-style: italic;
  font-weight: lighter;
  margin: 0;
  margin-bottom: 4px;
  font-size: 16px;
  height: 100%;
`;

const TerminalOutput = styled.p<{ error?: boolean }>`
  color: ${props => (props.error ? Colors.danger : 'white')};
  font-weight: lighter;
  margin: 0;
  font-size: 16px;
  white-space: pre-line;
`;

const StyledInput = styled.input`
  height: 16px;
  flex: 1;
  background-color: #2e3440;
  border: none;
  outline: none;
  font-size: 16px;
  color: #6a87a3;
`;

const Username = styled.p`
  color: #88c0d0;
  margin-right: 8px;
  font-size: 16px;
`;

const Column = styled.div`
  display: 'flex';
  flex-direction: 'column';
`;

interface TerminalProps {
  compiler: string;
  username: string;
}

const Terminal = ({ username, compiler }: TerminalProps) => {
  const {
    compilerStore: { outputs },
  } = useStore();

  return (
    <StyledContainer>
      <TabsContainer>
        <TabComp active>terminal</TabComp>
      </TabsContainer>
      <TerminalContent>
        <TerminalHeader># This is the codewaves integrated terminal.</TerminalHeader>
        <TerminalHeader># Your are currently using {compiler} compiler.</TerminalHeader>

        {outputs.map((o: any, index) => {
          return (
            <Column key={index}>
              <Row>
                <Username>
                  <span style={{ color: '#bf616a' }}>$</span>:/{username}
                </Username>
                <StyledInput disabled />
              </Row>
              <TerminalOutput error={o.type === 'error'}>{o.output}</TerminalOutput>
            </Column>
          );
        })}
        <Row>
          <Username>
            <span style={{ color: '#bf616a' }}>$</span>:/{username}
          </Username>
          <StyledInput />
        </Row>
      </TerminalContent>
    </StyledContainer>
  );
};

export default observer(Terminal);
