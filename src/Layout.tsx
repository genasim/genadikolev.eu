import { ReactNode } from 'react'
import Sidebar from './components/Sidebar'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}

export default Layout
