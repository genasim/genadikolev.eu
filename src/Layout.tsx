import { ReactNode } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Navbar from './components/Navbar'
import SocialsSidebar from './components/SocialsSidebar'

interface LayoutProps {
  children: ReactNode
}

const PageContainer = styled.div`
  padding: 6rem 8rem;

  ${media.lessThan('medium')`
    padding: 6rem 2rem;
  `}

  ${media.lessThan('small')`
    padding: 6rem 1rem;
  `}
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <SocialsSidebar />
      <PageContainer>
        {children}
      </PageContainer>
    </>
  )
}

export default Layout
