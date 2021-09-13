import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import { Colors } from '../../constants/style/Colors';
import { STATUS_CODES } from '../../constants/statusCodes/StatusCodes';

import CompilerEditor from '../../components/editor/CompilerEditor';
import Terminal from '../../components/terminal/Terminal';
import { Spinner } from '../../components/spinner/Spinner';
import { useStore } from '../../hooks/useStore';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Half = styled.div`
  width: 50%;
  height: 100vh;
`;

const CompilerPlaygroundScreen = ({ match }: any) => {
  const [loading, setLoading] = useState(false);
  const {
    playgroundStore: { getPlaygroundById, currentPlayground, updatePlayground },
  } = useStore();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        await getPlaygroundById(match.params.id);
      } catch (error) {
        alert('Playground not found!');
      }
      setLoading(false);
    })();

    return () => {
      console.log('here i should update the playground with the current code');
      (async () => {
        const { status } = await updatePlayground();
        console.log(status);
        if (status !== STATUS_CODES.success) alert('Your playground has not been saved');
      })();
    };
  }, []);

  return (
    <StyledContainer>
      {loading ? (
        <Spinner color={Colors.primary} size={24} />
      ) : (
        <>
          <Half>
            <CompilerEditor theme="material" />
          </Half>
          <Half>
            <Terminal username={'username'} compiler={currentPlayground.compilers[0].name} />
          </Half>
        </>
      )}
    </StyledContainer>
  );
};

export default withRouter(observer(CompilerPlaygroundScreen));
