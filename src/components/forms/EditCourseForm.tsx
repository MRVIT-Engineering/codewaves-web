import { useLocation } from 'react-router';
import { useState } from 'react';

import { difficultyOptions } from '../../constants/types/SelectOption';

import { useStore } from '../../hooks/useStore';
import { TextInput } from '../control/TextInput';
import { Textarea } from '../control/Textarea';
import { Spacer } from '../common/Spacer';
import { Button } from '../buttons/PrimaryButton';
import { Select } from '../control/Select';

export const EditCourseForm = () => {
  const { state }: any = useLocation();
  const INITIAL_FORM_STATE = {
    title: state.title,
    description: state.description,
    difficulty: state.difficulty,
  };
  const [formData, setFormData] = useState<any>(INITIAL_FORM_STATE);
  const { courseStore } = useStore();

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
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
          const { status } = await courseStore.updateCourse(state._id, formData);
          if (status === 200) alert('Updated succesfully!');
        }}
      >
        SAVE
      </Button>
    </form>
  );
};
