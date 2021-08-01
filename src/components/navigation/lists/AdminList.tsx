import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// import logoSmall from '../../../assets/images/logos/logo-small.svg';
import { Routes } from '../../../constants/routes';

const StyledContainer = styled.ul`
  width: 100%;
  height: 100vh;
  padding: 50px 0 0 0;
  list-style: none;
  display: flex;
  flex-flow: column;
`;

const ListItem = styled.li<{ active: boolean }>`
  width: 100%;
  height: 45px;
  color: ${props => (props.active ? 'var(--primary)' : 'var(--customBlack)')};
  cursor: pointer;
  padding-left: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    color: var(--primary);
  }
`;

const links = [
  { name: 'Home', to: Routes.AdminDashboard },
  { name: 'Courses', to: Routes.AdminCourses },
  { name: 'Add Course', to: Routes.AdminAddCourse },
  { name: 'Algos', to: Routes.AdminAlgos },
  { name: 'Add Algo', to: Routes.AdminAddAlgo },
  { name: 'Problems', to: Routes.AdminProblems },
  { name: 'Add Problem', to: Routes.AdminAddProblem },
];

const AdminNavList = (props: any) => {
  const {
    match: { path },
  } = props;
  return (
    <StyledContainer>
      {links.map(link => (
        <ListItem key={link.to} active={path === link.to}>
          <Link to={link.to}>{link.name}</Link>
        </ListItem>
      ))}
    </StyledContainer>
  );
};

export default withRouter(AdminNavList);
