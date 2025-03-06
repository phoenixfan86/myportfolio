
interface ButtonPrimaryProps {
  href?: string
  target?: string
  label: string
  icon?: string
  classes?: string
}

/** Button Primary */

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ''
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary" + classes}>
        {label}
        {icon ?
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
          : undefined
        }
      </a >
    )
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}
        {icon ?
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
          : undefined
        }
      </button>
    )
  }
}

/** Button Outline */

const ButtonOutline: React.FC<ButtonPrimaryProps> = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ''
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline" + classes}>
        {label}
        {icon ?
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
          : undefined
        }
      </a >
    )
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}
        {icon ?
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
          : undefined
        }
      </button>
    )
  }
}

export {
  ButtonPrimary, ButtonOutline
}