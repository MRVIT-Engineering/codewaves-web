import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';

import { useEffect, useState } from 'react';
import { Routes } from '../../constants/routes';

import { Separator } from '../../components/common/Separator';
import { useStore } from '../../hooks/useStore';
import { Spacer } from '../../components/common/Spacer';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledCard = styled.div`
  width: 240px;
  border: solid 1px lightgrey;
  border-radius: 8px;
  padding: 0 16px 0 16px;
  margin: 0 16px 16px 0;
  transition: border-color 0.4s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-color: var(--primary);
    cursor: pointer;
  }
`;

export const CoursesList = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const history = useHistory();
  const {
    appStateStore: { courseApi },
  } = useStore();

  useEffect(() => {
    (async () => {
      const { status, data } = await courseApi.listCourses();
      if (status === 200) setCourses(data);
      else alert('failed');
    })();
  }, []);

  return (
    <>
      <h1>Codewaves courses</h1>
      <Separator />
      <Spacer height={16} />
      <StyledContainer>
        {courses.map(course => (
          <StyledCard
            key={course.title}
            onClick={() => {
              history.push(`${Routes.CoursePreview}/${course._id}`, { ...course });
            }}
          >
            <h4>{course.title}</h4>
            <AiOutlineDelete color={'var(--danger)'} size={24} />
          </StyledCard>
        ))}
      </StyledContainer>
    </>
  );
};
