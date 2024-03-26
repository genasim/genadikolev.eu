import React from 'react'
import { Button, ButtonProps } from 'react-bootstrap'
import { FaHome, FaLaptopCode, FaRocket } from 'react-icons/fa'
import { MdOutlineHistoryEdu } from 'react-icons/md'
import { TbDownload } from 'react-icons/tb'
import { useTheme } from 'styled-components'

interface IconButtonProps extends ButtonProps{
  title?: string
  variant?: string
  handleOnClick?: () => void
}

const IconLink: React.FC<IconButtonProps> = ({
  variant,
  title,
  handleOnClick,
  as,
  href,
}) => {
  const Icon = resolveIcon(title ?? '')
  const theme = useTheme()

  return (
    <Button
      as={as}
      href={href}
      onClick={handleOnClick}
      variant={variant ?? 'transparent'}
      className={`d-flex text-white flex-column align-items-center
       text-primary`}
    >
      <Icon
        size={26}
        color={theme.white}
      />
      <p>{title}</p>
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

export default IconLink
