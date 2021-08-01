import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { AiOutlinePlus } from 'react-icons/ai';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router';

import { Routes } from '../../constants/routes';

import EditCourseForm from '../../components/forms/EditCourseForm';
import AddSectionForm from '../../components/forms/AddSectionForm';
import { Separator } from '../../components/common/Separator';
import { Spacer } from '../../components/common/Spacer';
import { StyledTab } from '../../utils/style/styledComponents';
import { Headline, HeadlineSmall } from '../../components/typography/Headlines';
import { Icon } from '../../components/icon/Icon';
import { useStore } from '../../hooks/useStore';
import { Spinner } from '../../components/spinner/Spinner';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';

const StyledContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
`;

const StyledCard = styled.div<{ add?: boolean }>`
  padding: 16px;
  max-height: 56px;
  display: flex;
  justify-content: ${props => (props.add ? 'center' : 'flex-start')};
  align-items: center;
  min-width: 200px;
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

const SectionContainer = styled.div`
  margin-bottom: 32px;
`;

const AdminEditCourseScreen = ({ match }: any) => {
  const [course, setCourse] = useState<any>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { courseStore } = useStore();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const { data, status } = await courseStore.getCourse(match.params.id);
      if (status === 200) setCourse(data);
      else alert('Could not get the course');
      setLoading(false);
    })();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Breadcrumbs mainSection={'Dashboard'} crumbs={['Courses', courseStore.course.title, 'Edit']} />
      <Headline>{courseStore.course.title}</Headline>
      <Separator />
      <Spacer height={32} />
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
          Sections
        </StyledTab>
      </Row>
      <Spacer height={32} />
      <StyledContainer>
        {activeIndex === 0 && <EditCourseForm />}
        {activeIndex === 1 && (
          <div>
            <AddSectionForm courseData={course} />
            <Spacer height={32} />
            {courseStore.course.sections.map((s: any) => (
              <SectionContainer key={s._id}>
                <HeadlineSmall>{s.title}</HeadlineSmall>
                <Spacer height={16} />
                <Row>
                  <StyledCard
                    add
                    onClick={() => {
                      history.push(`${Routes.AddLecture}/${s._id}`, {
                        sectionTitle: s.title,
                        courseTitle: course.title,
                      });
                    }}
                  >
                    <Icon icon={<AiOutlinePlus />} size={24} />
                  </StyledCard>
                  {s.lectures.map((l: any, index: number) => (
                    <StyledCard key={index}>
                      <HeadlineSmall>{l.title}</HeadlineSmall>
                    </StyledCard>
                  ))}
                </Row>
              </SectionContainer>
            ))}
          </div>
        )}
      </StyledContainer>
    </>
  );
};

export default withRouter(observer(AdminEditCourseScreen));
