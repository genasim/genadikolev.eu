import { ReactNode } from 'react'
import Navbar from './components/Navbar'
import SocialsSidebar from './components/SocialsSidebar'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <SocialsSidebar />
      {children}
    </>
  )
}

export default Layout
