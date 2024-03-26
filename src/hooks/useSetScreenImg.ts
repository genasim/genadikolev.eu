import { createContext, useContext, useEffect } from 'react'

interface ImageContext {
  setImageUrl: (url: string) => void
}

export const ImageUrlContext = createContext<
  ImageContext | undefined
>(undefined)

export default (url: string) => {
  const context = useContext(ImageUrlContext)
  if (context === undefined)
    throw new Error(
      'useSetImageUrlContext must be within an ScreenImageLayout',
    )

  useEffect(() => {
    context.setImageUrl(`${url}`)
  }, [])
}
