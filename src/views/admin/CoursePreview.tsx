import { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import { Routes } from '../../constants/routes';

import { Spacer } from '../../components/common/Spacer';
import { Separator } from '../../components/common/Separator';
import { Icon } from '../../components/icon/Icon';
import { PrimaryText, Row, StyledTab } from '../../utils/style/styledComponents';
import { useStore } from '../../hooks/useStore';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Headline } from '../../components/common/Headline';

const CoursePreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { state }: any = useLocation();
  const { courseStore } = useStore();
  const history = useHistory();

  return (
    <>
      <Breadcrumbs mainSection={'Dashboard'} crumbs={['Courses', state.title]} />
      <Row>
        <Headline>{state.title}</Headline>
        <Spacer width={32} />
        <Icon
          onClick={async () => {
            const { status } = await courseStore.deleteCourse(state._id);
            if (status === 200) {
              alert('Course deleted');
              history.push(Routes.AdminCourses);
            } else {
              alert('There was a problem deleting');
            }
          }}
          hoverColor={'var(--danger-dark)'}
          color={'var(--danger)'}
          icon={<AiOutlineDelete />}
          size={24}
        />
        <Spacer width={16} />
        <Icon
          onClick={() => {
            history.push(`${Routes.CourseEdit}/${state._id}`, state);
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
            <PrimaryText>Description</PrimaryText>: {state.description}
          </p>
        </div>
      )}
    </>
  );
};

export default observer(CoursePreview);
