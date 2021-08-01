import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, withRouter } from 'react-router';

import { difficultyOptions } from '../../constants/types/SelectOption';

import { useStore } from '../../hooks/useStore';
import { TextInput } from '../control/TextInput';
import { Textarea } from '../control/Textarea';
import { Spacer } from '../common/Spacer';
import { Button } from '../buttons/PrimaryButton';
import { Select } from '../control/Select';
import { STATUS_CODES } from '../../constants/statusCodes/StatusCodes';

const StyledContainer = styled.div`
  width: 600px;
`;

const EditCourseForm = ({ match }: any) => {
  const { state }: any = useLocation();
  const {
    courseStore: { getCourse, updateCourse },
  } = useStore();

  const INITIAL_FORM_STATE = {
    title: '',
    description: '',
    difficulty: -1,
  };

  const [formData, setFormData] = useState<any>(INITIAL_FORM_STATE);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    (async () => {
      const { status, data } = await getCourse(match.params.id);
      if (status === STATUS_CODES.success) {
        setFormData({ title: data.title, description: data.description, difficulty: data.difficulty });
      } else {
        alert('Could not get the course information!');
      }
    })();
  }, []);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
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
            const { status } = await updateCourse(state._id, formData);
            if (status === 200) alert('Updated succesfully!');
          }}
        >
          SAVE
        </Button>
      </form>
    </StyledContainer>
  );
};

export default withRouter(EditCourseForm);
