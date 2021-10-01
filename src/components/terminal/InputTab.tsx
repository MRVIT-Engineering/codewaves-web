import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Codemirror } from '../editor/Codemirror';
import { useStore } from '../../hooks/useStore';
import { Colors } from '../../constants/style/Colors';

const EditorContainer = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  position: relative;
`;

const Overlay = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  position: absolute;
  top: 0;
  background: ${Colors.terminalBackground};
  z-index: 2;
`;

export const InputTab = () => {
  const [show, setShow] = useState(true);
  const {
    playgroundStore: { inputData, setInputData },
  } = useStore();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 10);
  }, []);

  return (
    <EditorContainer>
      {show && <Overlay />}
      <Codemirror lineNumbers value={inputData} setValue={setInputData} theme={'customdark'} mode={'ruby'} />
    </EditorContainer>
  );
};
