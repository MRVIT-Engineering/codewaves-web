import styled from "styled-components";
import SyncSpinner from "react-spinners/SyncLoader";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = () => {
  return (
    <StyledContainer>
      <SyncSpinner color={"#827ffe"} size={15} margin={2} />
    </StyledContainer>
  );
};
