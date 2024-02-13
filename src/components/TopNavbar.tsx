import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import { TbDownload } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import pages from '../pages';

const NavLink = styled(Link)`
  position: relative;
  color: ${props => props.theme.white};
  text-decoration: none;
  cursor: pointer;

  /* Hover state */
  &:hover {
    color: ${props => props.theme.light};
  }

  /* After pseudo-element for the underline */
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${props => props.theme.primary};
    transition: width 0.3s ease-in-out;
  }

  /* Extend underline on hover */
  &:hover:after {
    width: 50%; /* Adjust as needed */
  }

  /* Active state style */
  &.active {
    color: ${props => props.theme.light};

    &:after {
      width: 100%; /* Full width underline for active link */
      background-color: ${props =>
        props.theme.primary}; /* Underline color */
    }
  }
`

interface TopNavbarProps {
    cvUrl?: string
}

const TopNavbar: React.FC<TopNavbarProps> = ({ cvUrl }) => {
  const location = useLocation()

  return (
    <Navbar
      bg="transparent"
      fixed="top"
    >
      <Container>
        <Nav className="mx-auto py-4">
          {pages.map(page => (
            <NavLink
              key={page.path}
              className={`mx-5 fs-4 ${
                location.pathname === page.path ? 'active' : ''
              }`}
              to={page.path}
            >
              {page.title}
            </NavLink>
          ))}

             <Button
               className="d-flex justify-content-around align-items-center mx-3 bg-primary"
               style={{ width: '10rem' }}
               href={cvUrl}
               target="_blank"
             >
               <TbDownload size={25}/>
               Download CV
             </Button>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default TopNavbar
