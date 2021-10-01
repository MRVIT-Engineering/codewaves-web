import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { Colors } from '../../constants/style/Colors';

import { InputTab } from './InputTab';
import OutputTab from './OutputTab';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.terminalBackground};
`;

const TerminalContent = styled.div`
  overflow: auto;
`;

const TabsContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${Colors.terminalTabsContainer};
  display: flex;
`;

const TabComp = styled.div<{ active?: boolean }>`
  width: 130px;
  height: 100%;
  background-color: ${props => (props.active ? Colors.terminalBackground : Colors.terminalTabsContainer)};
  color: ${props => (props.active ? Colors.white : Colors.placeholderGrey)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface TerminalProps {
  compiler: string;
  username: string;
}

const Terminal = ({ username, compiler }: TerminalProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledContainer>
      <TabsContainer>
        <TabComp
          onClick={() => {
            setActiveTab(0);
          }}
          active={activeTab === 0}
        >
          terminal
        </TabComp>
        <TabComp
          onClick={() => {
            setActiveTab(1);
          }}
          active={activeTab === 1}
        >
          input.in
        </TabComp>
      </TabsContainer>
      <TerminalContent>
        {activeTab === 0 ? <OutputTab username={username} compiler={compiler} /> : <InputTab />}
      </TerminalContent>
    </StyledContainer>
  );
};

export default observer(Terminal);
