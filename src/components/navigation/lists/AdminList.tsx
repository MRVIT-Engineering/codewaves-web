import styled from "styled-components";
import { Link } from "react-router-dom";

import { Routes } from "../../../constants/routes";

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
        <Link to={Routes.AdminDashboard}> Home </Link>
      </ListItem>
      <ListItem>
        <Link to={Routes.AdminCourses}> Courses </Link>
      </ListItem>
      <ListItem>
        <Link to={Routes.AdminAddCourse}> Add Course </Link>
      </ListItem>
      <ListItem>
        <Link to={Routes.AdminAlgos}> Algos </Link>
      </ListItem>
      <ListItem>
        <Link to={Routes.AdminAddAlgo}> Add Algo </Link>
      </ListItem>
      <ListItem>
        <Link to={Routes.AdminProblems}> Problems </Link>
      </ListItem>
      <ListItem>
        <Link to={Routes.AdminAddProblem}> Add Problem </Link>
      </ListItem>
    </StyledContainer>
  );
};
