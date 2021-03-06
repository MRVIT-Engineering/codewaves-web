import styled from 'styled-components';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { useStore } from '../../hooks/useStore';
import { TextInput } from '../control/TextInput';
import { Spacer } from '../common/Spacer';
import { Button } from '../buttons/PrimaryButton';
import { HeadlineSmall } from '../typography/Headlines';

const INITIAL_FORM_STATE = {
  title: '',
  lectures: [],
};

const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
`;

const Row = styled.div`
  display: flex;
  overflow: visible;
  height: 100px;
  padding-top: 8px;
`;

const AddSectionForm = ({ courseData }: any) => {
  const [formData, setFormData] = useState<any>(INITIAL_FORM_STATE);
  const { courseStore } = useStore();

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <HeadlineSmall>Add a new section</HeadlineSmall>
        <Row>
          <TextInput
            noMargin
            placeholder={'Section title'}
            value={formData.title}
            onChange={e => {
              setFormData({ ...formData, title: e.target.value });
            }}
          />
          <Spacer width={16} />
          <Button
            onClick={async () => {
              const { status } = await courseStore.addSection({ id: courseData._id, data: formData });
              console.log('Status for adding a section', status);
            }}
          >
            add section
          </Button>
        </Row>
      </form>
    </StyledContainer>
  );
};

export default withRouter(AddSectionForm);
