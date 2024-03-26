import React, { useState } from 'react'
import { Navbar, Offcanvas } from 'react-bootstrap'
import { IoShareSocialSharp } from 'react-icons/io5'
import styled from 'styled-components'
import media from 'styled-media-query'
import Social from './Social'
import uuid from 'react-uuid'

const StyledSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 8rem; // Adjust the width as needed
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  ${media.lessThan('medium')`
    display: none;
  `}
`

const VerticalLine = styled.div`
  height: 100%;
  max-height: 15.5rem;
  width: 1px;
  background-color: ${props => props.theme.light}; /* Line color */
  margin: 2rem auto;
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`

const ResponsiveSideNavbarToggle = styled(Navbar)`
  ${media.lessThan('medium')`
    display: block;
  `}
`

const StyledTbMenu = styled(IoShareSocialSharp)`
  color: ${props => props.theme.white};
  display: none;
  cursor: pointer;

  ${media.lessThan('medium')`
    position: absolute;
    display: block;
    left: 1.5rem;
  `}
`

interface SocialsSidebarProps {
  socials?: { href: string; network: string }[]
}

const SocialsSidebar: React.FC<SocialsSidebarProps> = ({
  socials,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const handleToggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <>
      <StyledSidebar>
        <VerticalLine />
        <SocialLinks>
          {socials?.map(social => (
            <Social
              key={uuid()}
              href={social.href}
              network={social.network}
            />
          ))}
        </SocialLinks>
        <VerticalLine />
      </StyledSidebar>

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
          background: 'transparent',
          border: '0px',
        }}
        show={showSidebar}
        onHide={handleToggleSidebar}
        placement="start"
      >
        <Offcanvas.Header closeButton />
        <Offcanvas.Body className="mt-2 d-flex flex-column justify-content-center">
          <SocialLinks>
            {socials?.map(social => (
              <Social
                key={uuid()}
                href={social.href}
                network={social.network}
              />
            ))}
          </SocialLinks>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default SocialsSidebar
