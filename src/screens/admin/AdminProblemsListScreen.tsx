import styled from 'styled-components';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';

import { Routes } from '../../constants/routes';

import { RowWithWrap, StyledCard } from '../../utils/style/styledComponents';
import { Headline } from '../../components/typography/Headlines';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Separator } from '../../components/common/Separator';
import { useStore } from '../../hooks/useStore';
import { Spacer } from '../../components/common/Spacer';

const StyledContainer = styled.div`
  width: 600px;
`;

const AdminAlgosScreen = () => {
  const history = useHistory();
  const {
    algoStore: { getAlgos, algos, setCurrentAlgo },
  } = useStore();

  useEffect(() => {
    (async () => {
      try {
        await getAlgos();
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  return (
    <>
      <StyledContainer>
        <Breadcrumbs mainSection={'Dashboard'} crumbs={['Problems Collection']} />
        <Headline>Codewaves Algo Problems</Headline>
        <Separator />
      </StyledContainer>
      <Spacer height={32} />
      <RowWithWrap>
        {algos.map((algo, index) => (
          <StyledCard
            onClick={() => {
              setCurrentAlgo(algo);
              history.push(`${Routes.AdminAlgoPreview}/${algo._id}`);
            }}
            key={index}
          >
            {algo.title}
          </StyledCard>
        ))}
      </RowWithWrap>
    </>
  );
};

export default observer(AdminAlgosScreen);
