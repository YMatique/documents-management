import { FaArrowLeft } from 'react-icons/fa6'
interface ButtonProps {
  onClick: () => void
  className: string
}
function ButtonBack({ onClick, className }: ButtonProps): JSX.Element {
  return (
    <button
      className={`p-2 ml-[-8px] text-base text-darkColor  dark:text-primary ${className}`}
      onClick={onClick}
    >
      <FaArrowLeft />
    </button>
  )
}

export default ButtonBack
