import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Navbar from './components/Navbar'
import SocialsSidebar from './components/SocialsSidebar'

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

interface ImageContext {
  setImageUrl: (url: string) => void
}

const ImageUrlContext = createContext<ImageContext | undefined>(
  undefined,
)

export const useSetImageUrlContext = (url: string) => {
  const context = useContext(ImageUrlContext)
  if (context === undefined)
    throw new Error(
      'useSetImageUrlContext must be within an ScreenImageLayout',
    )

  useEffect(() => {
    context.setImageUrl(url)
  }, [context.setImageUrl])
}

const ScreenImageLayout: React.FC<LayoutProps> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  return (
    <ImageUrlContext.Provider value={{ setImageUrl }}>
      <WholescreenImage
        src={imageUrl}
        alt="Background image"
      />
      <Navbar />
      <SocialsSidebar />
      <PageContainer>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {children}
        </div>
      </PageContainer>
    </ImageUrlContext.Provider>
  )
}

export default ScreenImageLayout
