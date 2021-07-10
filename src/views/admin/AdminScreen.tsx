import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

import { Button } from '../../components/buttons/PrimaryButton';

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const FormContainer = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const AdminScreen = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <StyledContainer>
      <FormContainer>
        <Button
          onClick={() => {
            loginWithRedirect({
              // redirectUri: "http://localhost:3000/admin/dashboard",
            });
          }}
        >
          admin login
        </Button>
      </FormContainer>
    </StyledContainer>
  );
};
