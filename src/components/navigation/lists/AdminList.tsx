import styled from "styled-components";
import { Link } from "react-router-dom";

import { NavigationRoutes } from "../../../constants/routes";

const StyledContainer = styled.ul`
  width: 100%;
  height: 100vh;
  padding: 50px 0 0 0;
  list-style: none;
  display: flex;
  flex-flow: column;
`;

const ListItem = styled.li`
  width: 100%;
  height: 45px;
  color: var(--custom-black);
  cursor: pointer;
  padding-left: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    color: var(--primary);
  }
`;

export const AdminNavList = () => {
  return (
    <StyledContainer>
      <ListItem>
        <Link to={NavigationRoutes.AdminDashboard}> Home </Link>
      </ListItem>
      <ListItem>
        <Link to={NavigationRoutes.AdminCourses}> Courses </Link>
      </ListItem>
      <ListItem>
        <Link to={NavigationRoutes.AdminAddCourse}> Add Course </Link>
      </ListItem>
      <ListItem>
        <Link to={NavigationRoutes.AdminAlgos}> Algos </Link>
      </ListItem>
      <ListItem>
        <Link to={NavigationRoutes.AdminAddAlgo}> Add Algo </Link>
      </ListItem>
      <ListItem>
        <Link to={NavigationRoutes.AdminProblems}> Problems </Link>
      </ListItem>
      <ListItem>
        <Link to={NavigationRoutes.AdminAddProblem}> Add Problem </Link>
      </ListItem>
    </StyledContainer>
  );
};
