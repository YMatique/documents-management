import { FaCirclePlus } from 'react-icons/fa6'
interface ButtonProps {
  onClick: () => void
  className: string
}
function ButtonPlus({ onClick, className }: ButtonProps): JSX.Element {
  return (
    <button className={`p-2  text-base text-primary ${className}`} onClick={onClick}>
      <FaCirclePlus />
    </button>
  )
}

export default ButtonPlus
