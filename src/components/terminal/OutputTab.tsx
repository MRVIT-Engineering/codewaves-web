import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Colors } from '../../constants/style/Colors';

import { Row } from '../../utils/style/styledComponents';
import { useStore } from '../../hooks/useStore';

const StyledContainer = styled.div`
  padding: 0 0 0 16px;
`;

const TerminalHeader = styled.p`
  color: ${Colors.placeholderGrey};
  font-weight: lighter;
  margin: 0;
  margin-bottom: 4px;
  font-size: 14px;
  height: 100%;
  line-height: 14px;
`;

const Column = styled.div`
  display: 'flex';
  flex-direction: 'column';
`;

const Username = styled.p`
  color: #88c0d0;
  margin-right: 8px;
  font-size: 16px;
`;

const TerminalOutput = styled.p<{ error?: boolean }>`
  color: ${props => (props.error ? Colors.danger : Colors.white)};
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

interface OutputTabProps {
  compiler: string;
  username: string;
}

const OutputTab = ({ username, compiler }: OutputTabProps) => {
  const {
    compilerStore: { outputs },
  } = useStore();

  return (
    <StyledContainer>
      <TerminalHeader># </TerminalHeader>
      <TerminalHeader># This is the codewaves integrated terminal.</TerminalHeader>
      <TerminalHeader># Your are currently using {compiler} compiler.</TerminalHeader>
      <TerminalHeader>
        # <span style={{ color: Colors.primary }}>@codewaves</span> wishes you happy coding.
      </TerminalHeader>
      <TerminalHeader>## </TerminalHeader>
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
    </StyledContainer>
  );
};

export default observer(OutputTab);
