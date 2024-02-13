import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { useTheme } from 'styled-components'

interface SocialProps {
  network?: string
  href?: string
}

const Social: React.FC<SocialProps> = ({
  network,
  href,
}) => {
  const theme = useTheme()

  return (
    <SocialIcon
      className="my-3"
      url={href}
      network={network}
      bgColor={theme.secondary}
      target="_blank"
      rel="noopener"
    />
  )
}

export default Social
