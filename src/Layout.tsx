import { ReactNode } from 'react'
import Sidebar from './components/Sidebar'
import TopNavbar from './components/TopNavbar'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  children,
}) => {
  return (
    <>
      <TopNavbar />
      <Sidebar />
      {children}
    </>
  )
}

export default Layout
