import { IconType } from 'react-icons'

interface ButtonProps {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg transition w-full font-semibold
      ${
        outline
          ? 'bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100'
          : 'bg-rose-500 border-rose-500 text-white hover:bg-rose-600'
      }
      ${small ? 'py-1 text-sm border' : 'py-3 text-md border-2'}
    `}
    >
      {Icon && (
        <Icon
          size={
            small ? 20 : 24
          }
          className={`
            absolute left-2 top-0 bottom-0 my-auto 
            ${outline ? 'text-gray-600' : 'text-white'}
          `}
        ></Icon>
      )}
      {label}
    </button>
  )
}

export default Button
