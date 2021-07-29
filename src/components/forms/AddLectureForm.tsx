import { useState } from 'react';

import { TextInput } from '../control/TextInput';

export const AddLectureForm = () => {
  const [formData, setFormData] = useState<any>({});

  const hadnleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <TextInput
        name={'title'}
        value={formData.title}
        placeholder={'Lecture title'}
        onChange={({ target }) => {
          hadnleInputChange(target.name, target.value);
        }}
      />
    </form>
  );
};
