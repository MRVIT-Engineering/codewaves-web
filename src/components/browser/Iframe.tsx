import { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../hooks/useStore';

const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

interface IframeProps {
  id: string;
}

const Iframe = (props: IframeProps) => {
  const { id } = props;
  const {
    compilerStore: { webOutput },
  } = useStore();

  useEffect(() => {
    const iframe: any = document.getElementById(id);
    const iframeDoc = iframe.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(webOutput);
    iframeDoc.close();
  }, [webOutput, id]);

  return <Frame id={id} />;
};

export default observer(Iframe);
