import { FaRegRectangleList } from 'react-icons/fa6'
interface ButtonProps {
  onClick: () => void
  className: string
}
function ButtonDetails({ onClick, className }: ButtonProps): JSX.Element {
  return (
    <button className={`p-2 text-base  text-secondary ${className}`} onClick={onClick}>
      <FaRegRectangleList />
    </button>
  )
}

export default ButtonDetails
