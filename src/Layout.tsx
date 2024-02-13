import { ReactNode } from 'react'
import SocialsSidebar from './components/SocialsSidebar'
import Navbar from './components/Navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <SocialsSidebar />
      {children}
    </>
  )
}

export default Layout
