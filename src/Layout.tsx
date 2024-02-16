import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Navbar from './components/Navbar'
import SocialsSidebar from './components/SocialsSidebar'
import { ImageUrlContext } from './hooks/useSetImageUrlContext'
import FallbackSpinner from './components/FallbackSpinner'
import useEndpoint from './hooks/useEndpoint'

interface LayoutProps {
  children: ReactNode
}

const WholescreenImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`

const PageContainer = styled.div`
  position: relative;
  padding: 6rem 8rem;

  ${media.lessThan('medium')`
    padding: 6rem 2rem;
  `}

  ${media.lessThan('small')`
    padding: 6rem 1rem;
  `}
`

interface GlobalsModel {
  cv: string
  socials: { href: string; network: string }[]
}

const ScreenImageLayout: React.FC<LayoutProps> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  const data = useEndpoint<GlobalsModel>('globals')

  if (!data) return <FallbackSpinner />

  return (
    <ImageUrlContext.Provider value={{ setImageUrl }}>
      <WholescreenImage
        src={imageUrl}
        alt="Background image"
      />
      <Navbar cvUrl={data.cv} />
      <SocialsSidebar socials={data.socials}/>
      <PageContainer>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {children}
        </div>
      </PageContainer>
    </ImageUrlContext.Provider>
  )
}

export default ScreenImageLayout
