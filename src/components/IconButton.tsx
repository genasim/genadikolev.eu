import React, { ReactNode } from 'react'
import { Button } from 'react-bootstrap'
import { FaHome, FaLaptopCode, FaRocket } from 'react-icons/fa'
import { MdOutlineHistoryEdu } from 'react-icons/md'
import { TbDownload } from 'react-icons/tb'
import { useTheme } from 'styled-components'

interface IconButtonProps {
  className?: string
  title?: string
  variant?: string
  iconColor?: string
  children?: ReactNode
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  variant,
  iconColor,
  title,
}) => {
  const Icon = resolveIcon(title ?? '')
  const theme = useTheme()

  return (
    <Button
      variant={variant ?? 'transparent'}
      className={`d-flex flex-column align-items-center
       text-primary ${className}`}
    >
      <Icon
        size={26}
        color={theme[iconColor ?? 'secondary']}
      />
      {children}
    </Button>
  )
}

const resolveIcon = (title: string) => {
  let Icon = null

  switch (title) {
    case 'Home':
      Icon = FaHome
      break
    case 'Skills':
      Icon = FaRocket
      break
    case 'Resume':
      Icon = MdOutlineHistoryEdu
      break
    case 'Projects':
      Icon = FaLaptopCode
      break
    case 'CV':
      Icon = TbDownload
      break
    default:
      Icon = FaHome
      break
  }
  return Icon
}

export default IconButton
