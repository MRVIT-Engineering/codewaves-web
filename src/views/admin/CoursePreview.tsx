import { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { useLocation } from 'react-router';

import { Spacer } from '../../components/common/Spacer';
import { Separator } from '../../components/common/Separator';
import { Icon } from '../../components/icon/Icon';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const StyledTab = styled.div<{ active?: boolean }>`
  border-radius: 20px;
  height: 20px;
  padding: 15px;
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  background-color: ${props => (props.active ? 'var(--primary)' : 'white')};
  color: ${props => (props.active ? 'white' : 'var(--custom-black)')};
  margin-right: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Colored = styled.span`
  color: var(--primary);
`;

const CoursePreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { state }: any = useLocation();
  console.log(location);

  return (
    <>
      <Row>
        <h1>{state.title}</h1>
        <Spacer width={32} />
        <Icon
          onClick={() => {
            console.log('');
          }}
          hoverColor={'var(--danger-dark)'}
          color={'var(--danger)'}
          icon={<AiOutlineDelete />}
          size={24}
        />
        <Spacer width={16} />
        <Icon
          onClick={() => {
            console.log('');
          }}
          icon={<AiOutlineEdit />}
          size={24}
        />
      </Row>
      <Separator />
      <Spacer height={32} />
      <Row>
        <StyledTab
          active={activeIndex === 0}
          onClick={() => {
            setActiveIndex(0);
          }}
        >
          <span>General</span>
        </StyledTab>
        <StyledTab
          active={activeIndex === 1}
          onClick={() => {
            setActiveIndex(1);
          }}
        >
          <span>Lectures</span>
        </StyledTab>
        <StyledTab
          active={activeIndex === 2}
          onClick={() => {
            setActiveIndex(2);
          }}
        >
          <span>Questions</span>
        </StyledTab>
      </Row>
      <Spacer height={32} />
      {activeIndex === 0 && (
        <div>
          <p>
            <Colored>Description</Colored>: {state.description}
          </p>
        </div>
      )}
    </>
  );
};

export default withRouter(CoursePreview);
