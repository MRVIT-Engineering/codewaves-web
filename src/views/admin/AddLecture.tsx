import styled from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { observer } from 'mobx-react-lite';
import { withRouter, useHistory } from 'react-router-dom';

import { LectureTypeOptions } from '../../constants/options/LectureTypeOptions';
// import { SublectureTypes } from '../../constants/enums/SublectureType';
// import { Sublecture } from '../../constants/types/Sublecture';

import { Headline } from '../../components/typography/Headlines';
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs';
import { Separator } from '../../components/common/Separator';
import { TextInput } from '../../components/control/TextInput';
import { Select } from '../../components/control/Select';
import { Spacer } from '../../components/common/Spacer';
import { HeadlineSmall } from '../../components/typography/Headlines';
import AddSublectureForm from '../../components/forms/AddSublectureForm';
import { Row } from '../../components/login/LoginForm';
import { Button } from '../../components/buttons/PrimaryButton';
import { useStore } from '../../hooks/useStore';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
`;

const SideContainer = styled.div`
  width: 50%;
  height: 100vh;

  &:last-child {
    padding: 16px;
  }
`;

const INITIAL_FORM_DATA = {
  title: '',
  type: 1,
};

const AddLectureScreen = ({ match }: any) => {
  const [formData, setFormData] = useState<any>(INITIAL_FORM_DATA);
  const history = useHistory();
  const {
    courseStore: { addLecture },
  } = useStore();

  const { state }: any = useLocation();

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await addLecture(match.params.id, formData);
    if (response) history.goBack();
    else alert('Something went wrong!');
  };

  return (
    <StyledContainer>
      <SideContainer>
        <Breadcrumbs
          mainSection={state.courseTitle}
          crumbs={['Sections', state.sectionTitle, 'Add Lecture']}
        />
        <Row>
          <Headline>New Lecture</Headline>
        </Row>
        <Separator />
        <Spacer height={32} />
        <HeadlineSmall>General Information</HeadlineSmall>
        <TextInput
          name={'title'}
          placeholder={'Lecture title'}
          value={formData.title}
          onChange={({ target }) => {
            handleChange(target.name, target.value);
          }}
        />
        <Select
          options={LectureTypeOptions}
          value={formData.type}
          onChange={e => {
            setFormData({ ...formData, type: e.target.value });
          }}
        />
        <Spacer height={60} />
        {+formData.type === 1 ? <AddSublectureForm /> : <p>we dont know yet ...</p>}
        <Spacer height={16} />
        <Button
          fullWidth
          onClick={() => {
            handleSubmit();
          }}
        >
          Save lecture
        </Button>
        <Spacer height={32} />
      </SideContainer>
      <SideContainer>
        {/* {sublectures.map((s: Sublecture) => {
          return s.type === SublectureTypes.TextSublecture ? (
            <p>Text sublecture</p>
          ) : (
            <CodeSpan>CODE</CodeSpan>
          );
        })} */}
      </SideContainer>
    </StyledContainer>
  );
};

export default withRouter(observer(AddLectureScreen));
