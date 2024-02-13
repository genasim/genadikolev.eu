import { ReactNode } from 'react'
import Sidebar from './components/Sidebar'
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
      <Sidebar />
      {children}
    </>
  )
}

export default Layout
