import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import { LanguageAlgorithm } from '../../constants/types/LanguageAlgo';

import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Headline } from '../../components/typography/Headlines';
import { useStore } from '../../hooks/useStore';
import { Separator } from '../../components/common/Separator';
import { StaticCodeEditor } from '../../components/editor/StaticCodeEditor';
import { Select } from '../../components/control/Select';
import { Spacer } from '../../components/common/Spacer';

const ColoredSpan = styled.span`
  color: var(--primary);
`;

const CodeContainer = styled.div`
  width: 600px;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  background-color: red;
`;

const StyledContainer = styled.div`
  width: 600px;
`;

const AlgoPreviewSreen = ({ match }: any) => {
  const [algo, setAlgo] = useState<any>({});
  const [algoLangCode, setAlgoLangCode] = useState('');
  const {
    algoStore: { getAlgo },
  } = useStore();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAlgo(match.params.id);
        setAlgo(data);
        console.log(data);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  return (
    <StyledContainer>
      <Breadcrumbs mainSection={'Dashboard'} crumbs={['Algo Preview', algo.title]} />
      <Headline>{algo.title}</Headline>
      <Separator />
      <p>
        <ColoredSpan>Complexity</ColoredSpan>: {algo.complexity}
      </p>
      <p>
        <ColoredSpan>Algorithm Type</ColoredSpan>: {algo.type}
      </p>

      <Select
        placeholder={'Choose language'}
        value={algoLangCode}
        onChange={e => {
          setAlgoLangCode(e.target.value);
        }}
        options={algo.algorithm.map(({ language, code }: LanguageAlgorithm) => {
          return { value: code, label: language };
        })}
      />
      <Spacer height={16} />
      <CodeContainer>
        <StaticCodeEditor lineNumbers mode={'jsx'} code={algoLangCode} />
      </CodeContainer>
    </StyledContainer>
  );
};

export default withRouter(observer(AlgoPreviewSreen));
