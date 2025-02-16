import { FaPenToSquare } from 'react-icons/fa6'
interface ButtonProps {
  onClick: () => void
  className: string
}
function ButtonEdit({ onClick, className }: ButtonProps): JSX.Element {
  return (
    <button className={`p-2 text-base  text-primary ${className}`} onClick={onClick}>
      <FaPenToSquare />
    </button>
  )
}

export default ButtonEdit
