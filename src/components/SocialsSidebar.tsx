import { useState } from 'react'
import { Navbar, Offcanvas } from 'react-bootstrap'
import { TbMenu } from 'react-icons/tb'
import styled from 'styled-components'
import media from 'styled-media-query'
import Social from './Social'

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
  position: absolute;
  left: 50%;
  top: 10%; // leave space at the top
  bottom: 10%; // leave space at the bottom
  width: 1px; // Width of the line
  background: ${props => props.theme.light};
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: -50%;
    width: 1px; // Match the width of the vertical line
    height: 15rem; // Height of the gaps
    background: ${props =>
      props.theme.background}; // Make the gaps transparent
  }
  &:before {
    top: calc(
      50% - 60px
    ); // Adjust this value to position the gap above the social links
  }
  &:after {
    bottom: calc(
      50% - 60px
    ); // Adjust this value to position the gap below the social links
  }
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

const StyledTbMenu = styled(TbMenu)`
  color: ${props => props.theme.white}; /* Adjust color as needed */
  display: none;
  cursor: pointer;

  ${media.lessThan('medium')`
    position: absolute;
    display: block;
    left: 1.5rem;
  `}
`

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const handleToggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <>
      <StyledSidebar>
        <VerticalLine />
        <SocialLinks>
          <Social network="instagram" />
          <Social
            network="github"
            href="https://github.com/genasim"
          />
          <Social network="linkedin" />
        </SocialLinks>
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
        <Offcanvas.Body className="mt-2 d-flex flex-column">
          <SocialLinks>
            <Social network="instagram" />
            <Social
              network="github"
              href="https://github.com/genasim"
            />
            <Social network="linkedin" />
          </SocialLinks>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Sidebar
