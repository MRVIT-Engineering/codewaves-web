import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/containers/Wrapper';
import { useHistory } from 'react-router';

import { Colors } from '../../constants/style/Colors';
import NoPlaygroundsImage from '../../assets/images/playground/huh.png';
import { PROGRAMING_LANGUAGES } from '../../constants/languages/Languages';

import NewPlaygroundForm from '../../components/forms/NewPlaygroundForm';
import { Headline, HeadlineSmall } from '../../components/typography/Headlines';
import { Separator } from '../../components/common/Separator';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/useStore';
import { Spinner } from '../../components/spinner/Spinner';
import { Button } from '../../components/buttons/PrimaryButton';
import { Spacer } from '../../components/common/Spacer';
import { AppModal } from '../../components/modal/AppModal';
import { parseDate } from '../../utils/parseDate';
import { getLanguageIcon } from '../../utils/getLanguageIcon';
import { Routes } from '../../constants/routes';

const StyledContainer = styled.div`
  max-width: 1900px;
  margin-left: auto;
  margin-right: auto;
`;

const Column = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 600px;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 32px;
`;

const CardContainer = styled.div<{ borderColor: string }>`
  width: 350px;
  box-shadow: var(--lighter-shadow);
  border-radius: 4px;
  padding: 16px;
  background-color: ${Colors.backgroundGrey};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.4s;
  border-left: ${props => `5px solid ${props.borderColor}`};

  :hover {
    transform: translateY(-4px);
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.p`
  color: ${Colors.placeholderGrey};
`;

const PlaygroundsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const history = useHistory();
  const {
    playgroundStore: { getPlaygroundByUser, playgrounds },
  } = useStore();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await getPlaygroundByUser();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (loading)
    return (
      <FlexContainer>
        <Spinner color={Colors.primary} size={20} />
      </FlexContainer>
    );

  return (
    <StyledContainer>
      <AppModal
        opened={modalOpened}
        title={''}
        handleClose={() => {
          setModalOpened(false);
        }}
      >
        <NewPlaygroundForm
          onSubmit={() => {
            setModalOpened(false);
          }}
        />
      </AppModal>
      <Wrapper>
        <Headline>Your playgrounds</Headline>
        <Separator />
        <Spacer height={32} />
        <FlexContainer>
          {playgrounds.length === 0 ? (
            <Column>
              <StyledImage src={NoPlaygroundsImage} alt={'No playgrounds'} />
              <HeadlineSmall noMargin>Nothing here, for now! Create your </HeadlineSmall>
              <HeadlineSmall>first playground now!</HeadlineSmall>
              <Spacer height={16} />
              <Button
                onClick={() => {
                  setModalOpened(true);
                }}
              >
                new playground
              </Button>
            </Column>
          ) : (
            playgrounds.map((p, index) => {
              const language = PROGRAMING_LANGUAGES[getLanguageIcon(p.tabs[0].language)];
              return (
                <CardContainer
                  onClick={() => {
                    history.push(`${Routes.CompilerPlayground}/${p._id}`);
                  }}
                  key={index}
                  borderColor={language.bgColor!}
                >
                  <Row>
                    <HeadlineSmall noMargin>{p.title}</HeadlineSmall>
                    {language.icon}
                  </Row>
                  <Date>{parseDate(p.createdAt!)}</Date>
                </CardContainer>
              );
            })
          )}
        </FlexContainer>
      </Wrapper>
    </StyledContainer>
  );
};

export default observer(PlaygroundsScreen);
