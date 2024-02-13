import React, { ReactNode } from 'react'
import { FaHome, FaLaptopCode, FaRocket } from 'react-icons/fa'
import { TbDownload } from 'react-icons/tb'
import { MdOutlineHistoryEdu } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Button } from 'react-bootstrap'

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
      className={`d-flex flex-column align-items-center my-3
       text-primary ${className}`}
    >
      <Icon
        size={30}
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
