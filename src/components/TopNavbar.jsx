/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { TbDownload } from 'react-icons/tb';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import pages from '../pages';
import useEndpoint from './useEndpoint';

const InternalNavLink = styled(NavLink)`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
  &.navbar__link--active {
    color: ${(props) => props.theme.navbarTheme.linkActiveColor};
  }
`;

const TopNavbar = () => {
  const theme = useContext(ThemeContext);
  const { data } = useEndpoint('social');

  return (
    <Navbar fixed="top" bg="dark" className="p-3">
      <Container className="d-flex justify-content-center">
        <Nav className="align-items-center">
          {pages.map((page, index) => (
            <InternalNavLink
              key={page.title}
              exact={index === 0}
              activeClassName="navbar__link--active"
              className="navbar__link mx-3"
              to={page.path}
              theme={theme}
            >
              {page.title}
            </InternalNavLink>
          ))}
          {data && (
            <Button
              className="d-flex justify-content-around align-items-center mx-3"
              style={{ background: theme.accentColor, border: '0px', width: '9.5rem' }}
              href={data.cv}
              target="_blank"
            >
              <TbDownload />
              Download CV
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

const TopNavbarWithRouter = withRouter(TopNavbar);
export default TopNavbarWithRouter;
