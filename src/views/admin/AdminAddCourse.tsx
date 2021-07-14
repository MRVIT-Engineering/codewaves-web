import { useState } from 'react';
import styled from 'styled-components';
import { Separator } from '../../components/common/Separator';

import { difficultyOptions } from '../../constants/types/SelectOption';

import { TextInput } from '../../components/control/TextInput';
import { Textarea } from '../../components/control/Textarea';
import { Select } from '../../components/control/Select';
import { Spacer } from '../../components/common/Spacer';
import { Button } from '../../components/buttons/PrimaryButton';
import { useStore } from '../../hooks/useStore';

const StyledContainer = styled.div`
  width: 500px;
  overflow: auto;
`;

const INITIAL_FORM_STATE = {
  title: '',
  description: '',
  difficulty: -1,
  courseImage: '',
};

export const AdminAddCourseScreen = () => {
  const [formData, setFormData] = useState<any>(INITIAL_FORM_STATE);
  const {
    appStateStore: { courseApi },
  } = useStore();

  const submit = async (e: any) => {
    e.preventDefault();

    const { title, description, difficulty, courseImage } = formData;
    const courseData = new FormData();
    courseData.append('courseImage', courseImage);
    courseData.append('title', title);
    courseData.append('description', description);
    courseData.append('difficulty', difficulty);

    const { data, status } = await courseApi.addCourse(courseData);
    if (status && data) alert('Course added!');
    else alert('Something went wrong');
  };

  return (
    <>
      <h1>New course</h1>
      <Separator />
      <StyledContainer>
        <form
          onSubmit={async e => {
            submit(e);
          }}
        >
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
          <input
            type="file"
            name="courseImage"
            onChange={e => {
              console.log(e.target.files);
              // @ts-ignore: Object is possibly 'null'.
              setFormData({ ...formData, courseImage: e.target.files[0] });
            }}
          />
          <Spacer height={25} />
          <Button onClick={() => {}}>Add Course</Button>
        </form>
      </StyledContainer>
    </>
  );
};
