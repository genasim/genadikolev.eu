import React, { useState } from 'react'
import {
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from 'react-bootstrap'
import { TbDownload, TbMenu } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import media from 'styled-media-query'
import pages from '../pages'
import IconButton from './IconButton'

const NavLink = styled(Link)`
  position: relative;
  color: ${props => props.theme.white};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.light};
  }

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

  &:hover:after {
    width: 50%;
  }

  &.active {
    color: ${props => props.theme.light};

    &:after {
      width: 100%;
      background-color: ${props => props.theme.primary};
    }
  }
`

const StyledTbMenu = styled(TbMenu)`
  color: ${props => props.theme.white}; /* Adjust color as needed */
  display: none;
  cursor: pointer;

  ${media.lessThan('medium')`
    position: absolute;
    display: block;
    right: 1.5rem;
  `}
`

const ResponsiveTopNavbar = styled(Navbar)`
  ${media.lessThan('medium')`
    display: none;
  `}
`

const ResponsiveSideNavbarToggle = styled(Navbar)`
  ${media.lessThan('medium')`
    display: block;
  `}
`

interface TopNavbarProps {
  cvUrl?: string
}

const TopNavbar: React.FC<TopNavbarProps> = ({ cvUrl }) => {
  const location = useLocation()
  const [showSidebar, setShowSidebar] = useState(false)

  const handleToggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <>
      <ResponsiveTopNavbar
        bg="transparent"
        fixed="top"
      >
        <Container>
          <Nav className="mx-auto py-4">
            {pages.map(page => (
              <NavLink
                key={page.path}
                className={`mx-4 fs-4 ${
                  location.pathname === page.path ? 'active' : ''
                }`}
                to={page.path}
              >
                {page.title}
              </NavLink>
            ))}
            <Button
              as="a"
              href={cvUrl}
              target="_blank"
              media="md"
            >
              <TbDownload size={25} />
              Download CV
            </Button>
          </Nav>
        </Container>
      </ResponsiveTopNavbar>

      <ResponsiveSideNavbarToggle
        fixed="top"
        bg="transparent"
        className='my-3'
      >
        <StyledTbMenu
          size={30}
          onClick={handleToggleSidebar}
        />
      </ResponsiveSideNavbarToggle>

      <Offcanvas
        style={{
          width: '5rem',
          background: 'transparent',
          border: '0px',
        }}
        show={showSidebar}
        onHide={handleToggleSidebar}
        placement="end"
      >
        <Offcanvas.Header closeButton />
        <Offcanvas.Body className="mt-2 d-flex flex-column">
          {pages.map(page => (
            <IconButton
              key={page.title}
              title={page.title}
            >
              <Link
                className="text-decoration-none"
                to={page.path}
              >
                {page.title}
              </Link>
            </IconButton>
          ))}
          <IconButton
            variant="primary"
            iconColor='white'
            title="CV"
          >
            <NavLink
                className="text-decoration-none"
                to={cvUrl ?? ''}
              >
                CV
              </NavLink>
          </IconButton>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default TopNavbar
