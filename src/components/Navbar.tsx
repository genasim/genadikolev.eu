import React, { useState } from 'react'
import {
  Button,
  Container,
  Nav,
  Navbar as Navbar_BS,
  Offcanvas,
} from 'react-bootstrap'
import { MdTableRows } from 'react-icons/md'
import { TbDownload } from 'react-icons/tb'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import media from 'styled-media-query'
import pages from '../pages'
import IconLink from './IconLink'
import uuid from 'react-uuid'

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

const StyledTbMenu = styled(MdTableRows)`
  color: ${props => props.theme.white}; /* Adjust color as needed */
  display: none;
  cursor: pointer;

  ${media.lessThan('medium')`
    position: absolute;
    display: block;
    right: 1.5rem;
  `}
`

const ResponsiveTopNavbar = styled(Navbar_BS)`
  ${media.lessThan('medium')`
    display: none;
  `}
`

const ResponsiveSideNavbarToggle = styled(Navbar_BS)`
  ${media.lessThan('medium')`
    display: block;
  `}
`

interface NavbarProps {
  cvUrl?: string
}

const Navbar: React.FC<NavbarProps> = ({ cvUrl }) => {
  const location = useLocation()
  const [showSidebar, setShowSidebar] = useState(false)
  const navigate = useNavigate()

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
                key={uuid()}
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
        className="my-3"
      >
        <StyledTbMenu
          size={30}
          onClick={handleToggleSidebar}
        />
      </ResponsiveSideNavbarToggle>

      <Offcanvas
        style={{
          width: '5rem',
          // background: theme.dark,
          background: 'transparent',
          border: '0px',
        }}
        show={showSidebar}
        onHide={handleToggleSidebar}
        placement="end"
      >
        <Offcanvas.Body className="mt-2 d-flex flex-column justify-content-around">
          <div className="mt-2 d-flex flex-column justify-content-around flex-grow-1">
            {pages.map(page => (
              <IconLink
                key={uuid()}
                title={page.title}
                handleOnClick={() => {
                  if (page.path) navigate(page.path)
                }}
              />
            ))}
          </div>
          <div className="flex-0">
            <IconLink
              variant="primary"
              title="CV"
              as="a"
              href={cvUrl ?? ''}
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Navbar
