import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AiOutlineHome, AiOutlineQuestionCircle, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiBookBookmark, BiBookContent, BiCodeCurly, BiListPlus, BiCodeAlt, BiLogOut } from 'react-icons/bi';
import { MdPlaylistAdd } from 'react-icons/md';
import { useAuth0 } from '@auth0/auth0-react';

import { Colors } from '../../../constants/style/Colors';
import { Routes } from '../../../constants/routes';
import logoSmall from '../../../assets/images/logos/logo-big.png';

const StyledContainer = styled.ul`
  width: 100%;
  height: 100vh;
  padding: 50px 0 32px 0;
  list-style: none;
  display: flex;
  flex-flow: column;
`;

const StyledImg = styled.img`
  width: 175px;
  height: auto;
  margin-left: 50px;
  margin-bottom: 32px;
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

  &:last-child {
    margin-top: auto;
  }

  &:hover {
    color: var(--primary);
  }

  svg {
    height: 100%;
  }
`;

const StyledParagraph = styled.p`
  color: ${Colors.danger};
`;

const links = [
  { name: 'Home', to: Routes.AdminDashboard, icon: <AiOutlineHome /> },
  { name: 'Courses', to: Routes.AdminCourses, icon: <BiBookBookmark /> },
  { name: 'Add Course', to: Routes.AdminAddCourse, icon: <BiBookContent /> },
  { name: 'Quizzes', to: Routes.AdminQuizzes, icon: <AiOutlineUnorderedList /> },
  { name: 'Add Quiz', to: Routes.AddQuizz, icon: <BiListPlus /> },
  { name: 'Algos', to: Routes.AdminAlgos, icon: <BiCodeCurly /> },
  { name: 'Add Algo', to: Routes.AdminAddAlgo, icon: <BiCodeAlt /> },
  { name: 'Problems', to: Routes.AdminProblems, icon: <AiOutlineQuestionCircle /> },
  { name: 'Add Problem', to: Routes.AdminAddProblem, icon: <MdPlaylistAdd /> },
];

const AdminNavList = (props: any) => {
  const { logout } = useAuth0();
  const {
    match: { path },
  } = props;

  return (
    <StyledContainer>
      <StyledImg src={logoSmall} alt="Codewaves logo." />
      {links.map(link => (
        <ListItem key={link.to} active={path === link.to}>
          <Link to={link.to}>
            {link.icon} {link.name}
          </Link>
        </ListItem>
      ))}
      <ListItem
        onClick={() => {
          logout();
        }}
        active={false}
      >
        <StyledParagraph>
          <BiLogOut color={Colors.danger} /> Logout
        </StyledParagraph>
      </ListItem>
    </StyledContainer>
  );
};

export default withRouter(AdminNavList);
