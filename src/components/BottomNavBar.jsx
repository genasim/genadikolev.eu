/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { FaHome, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { MdOutlineHistoryEdu } from 'react-icons/md';
import { TbDownload } from 'react-icons/tb';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import pages from '../pages';
import useEndpoint from './useEndpoint';
import useTheme from './useTheme';

const BottomNavbar = () => {
  const theme = useTheme();
  const data = useEndpoint('home');

  return (
    <Navbar sticky="bottom" bg="dark" className="p-2">
      <Container className="d-flex justify-content-evenly">
        {pages.map((page) => (
          <IconButton key={page.title} page={page} />
        ))}
        {data && (
          <Button
            style={{
              background: theme.accentColor,
              border: '0px',
              fontSize: '0.6em',
              padding: '0 0.5rem',
              width: '4.5em',
            }}
            className="d-flex align-items-center flex-column"
            href={data.cv}
            target="_blank"
          >
            <TbDownload size={22} />
            <div style={{ fontSize: '0.7rem' }}>CV</div>
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

const BottomNavbarWithRouter = withRouter(BottomNavbar);
export default BottomNavbarWithRouter;

const resolveIcon = (title) => {
  let Icon = null;

  switch (title) {
    case 'Home':
      Icon = FaHome;
      break;
    case 'Skills':
      Icon = FaRocket;
      break;
    case 'Resume':
      Icon = MdOutlineHistoryEdu;
      break;
    case 'Projects':
      Icon = FaLaptopCode;
      break;
    default:
      Icon = FaHome;
      break;
  }
  return Icon;
};

const IconButton = ({ page }) => {
  const Icon = resolveIcon(page.title);
  const theme = useTheme();

  return (
    <NavLink
      style={{ color: theme.color, margin: '0 0.65rem' }}
      activeClassName="navbar__link--active"
      className="navbar__link d-flex flex-column align-items-center"
      to={page.path}
    >
      <Icon size={25} />
      <div style={{ fontSize: '0.6em' }}>{page.title}</div>
    </NavLink>
  );
};

IconButton.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};
