import styled from 'styled-components'
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
  z-index: 10; // Make sure the sidebar floats above other content
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
  background: & > * {
    color: ${props => props.theme.primary};
    margin: 800px;
  }
`

const Sidebar = () => {
  return (
    <StyledSidebar>
      <VerticalLine />
      <SocialLinks>
        <Social network="instagram" />
        <Social network="github" />
        <Social network="linkedin" />
      </SocialLinks>
    </StyledSidebar>
  )
}

export default Sidebar
