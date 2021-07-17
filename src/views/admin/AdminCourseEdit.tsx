import { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { observer } from 'mobx-react-lite';
import { AiOutlinePlus } from 'react-icons/ai';

import { difficultyOptions } from '../../constants/types/SelectOption';

import { Separator } from '../../components/common/Separator';
import { TextInput } from '../../components/control/TextInput';
import { Textarea } from '../../components/control/Textarea';
import { Select } from '../../components/control/Select';
import { Spacer } from '../../components/common/Spacer';
import { Button } from '../../components/buttons/PrimaryButton';
import { useStore } from '../../hooks/useStore';
import { StyledTab, Row } from '../../utils/style/styledComponents';
import { Headline, HeadlineSmall } from '../../components/typography/Headlines';
import { Icon } from '../../components/icon/Icon';

const StyledContainer = styled.div`
  width: 500px;
  overflow: auto;
`;

const StyledCard = styled.div<{ add?: boolean }>`
  padding: 16px;
  max-height: 56px;
  display: flex;
  justify-content: ${props => (props.add ? 'center' : 'flex-start')};
  align-items: center;
  width: 240px;
  border-radius: 8px;
  background-color: var(--background-grey);
  border: ${props => (props.add ? '2px dashed var(--placeholder-grey)' : '1px solid var(--custom-grey)')};
  transition: border-color 0.4s;
  margin-right: 16px;

  &:hover {
    cursor: pointer;
    border-color: var(--primary);
  }
`;

const AdminEditCourseScreen = () => {
  const { state }: any = useLocation();
  const INITIAL_FORM_STATE = {
    title: state.title,
    description: state.description,
    difficulty: state.difficulty,
  };
  const [formData, setFormData] = useState<any>(INITIAL_FORM_STATE);
  const [activeIndex, setActiveIndex] = useState(0);
  const { courseStore } = useStore();

  return (
    <>
      <Headline>Edit: {state.title}</Headline>
      <Separator />
      <Spacer height={16} />
      <Row>
        <StyledTab
          active={activeIndex === 0}
          onClick={() => {
            setActiveIndex(0);
          }}
        >
          General
        </StyledTab>
        <StyledTab
          active={activeIndex === 1}
          onClick={() => {
            setActiveIndex(1);
          }}
        >
          Lectures
        </StyledTab>{' '}
      </Row>
      <Spacer height={32} />
      <StyledContainer>
        {activeIndex === 0 && (
          <div>
            <TextInput
              placeholder="Course Title"
              value={formData.title}
              onChange={e => {
                setFormData({ ...formData, title: e.target.value });
              }}
            />
            <Textarea
              placeholder="Description"
              value={formData.description}
              onChange={e => {
                setFormData({ ...formData, description: e.target.value });
              }}
            />
            <Select
              options={difficultyOptions}
              value={formData.difficulty}
              onChange={e => {
                setFormData({ ...formData, difficulty: e.target.value });
              }}
            />
            <Spacer height={25} />

            <Button
              onClick={async () => {
                const { status } = await courseStore.updateCourse(state._id, formData);
                if (status === 200) alert('Updated succesfully!');
              }}
            >
              SAVE
            </Button>
          </div>
        )}
        {activeIndex === 1 && (
          <Row>
            <StyledCard>
              <HeadlineSmall>Lecture 1.0</HeadlineSmall>
            </StyledCard>
            <StyledCard add>
              <Icon onClick={() => {}} icon={<AiOutlinePlus />} size={24} />
            </StyledCard>
          </Row>
        )}
      </StyledContainer>
    </>
  );
};

export default observer(AdminEditCourseScreen);
