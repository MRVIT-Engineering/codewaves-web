import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ScreenSize } from '../../../constants/media-queries/mediaQueris';
import { Routes } from '../../../constants/routes';

const NavList = styled.ul`
  height: 100%;
  min-width: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${ScreenSize.small} {
    display: none;
  }
`;

const StyledListItem = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }

  a {
    transition: color 0.4s;
    font-size: 1.6rem;

    &:hover {
      color: var(--primary);
    }
  }
`;

export const AppList = () => (
  <NavList>
    <StyledListItem>
      <Link to={Routes.CourseLibrary}>Web Dev</Link>
    </StyledListItem>
    <StyledListItem>
      <Link to="/">Algo</Link>
    </StyledListItem>
    <StyledListItem>
      <Link to={Routes.Playgrounds}>Playgrounds</Link>
    </StyledListItem>
  </NavList>
);
