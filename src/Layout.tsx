import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import FallbackSpinner from './components/FallbackSpinner'
import Navbar from './components/Navbar'
import SocialsSidebar from './components/SocialsSidebar'
import useEndpoint from './hooks/useEndpoint'
import { ImageUrlContext } from './hooks/useSetScreenImg'

interface LayoutProps {
  children: ReactNode
}

const WholescreenImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`

const PageContainer = styled.div`
  position: relative;
  margin: 6rem 9vw 0;
`

interface GlobalsModel {
  cv: string
  socials: { href: string; network: string }[]
}

const ScreenImageLayout: React.FC<LayoutProps> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  const { data, isLoading } = useEndpoint<GlobalsModel>('globals')

  if (isLoading) return <FallbackSpinner />

  return (
    <ImageUrlContext.Provider value={{ setImageUrl }}>
      <WholescreenImage
        src={imageUrl}
        alt="Background image"
      />
      <Navbar cvUrl={data?.cv} />
      <SocialsSidebar socials={data?.socials} />
      <PageContainer>{children}</PageContainer>
    </ImageUrlContext.Provider>
  )
}

export default ScreenImageLayout
