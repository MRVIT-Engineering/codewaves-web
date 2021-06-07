import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../config/axios";

const StyledContainer = styled.div`
  text-align: center;
`;

export const CoursesView = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    checkIfLoggedIn();
  }, []);

  const checkIfLoggedIn = async () => {
    try {
      let response = await axios.post("/auth/test");
    } catch (error) {
      console.log(error);
    }
    // console.log(response);
  };

  return (
    <StyledContainer>
      <h2>This is the course library</h2>
      <p></p>
    </StyledContainer>
  );
};
