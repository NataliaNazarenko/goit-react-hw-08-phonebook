import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  font-size: 18px;

  &:hover {
    color: #ffffff;
  }
`;
