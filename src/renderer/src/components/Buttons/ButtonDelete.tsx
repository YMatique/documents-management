import { FaTrashCan } from 'react-icons/fa6'
interface ButtonProps {
  onClick: () => void
  className: string
}
function ButtonDelete({ onClick, className }: ButtonProps): JSX.Element {
  return (
    <button className={`p-2 pl-3 pr-3 text-base  text-red-500 ${className}`} onClick={onClick}>
      <FaTrashCan />
    </button>
  )
}

export default ButtonDelete
