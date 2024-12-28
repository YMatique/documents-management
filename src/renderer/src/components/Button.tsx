interface ButtonProps {
  label: string
  onClick: () => void
  className: string
}
function Button({ label, className, onClick }: ButtonProps): JSX.Element {
  return (
    <>
      <button className={`text-white p-2 text-sm font-light  ${className}`} onClick={onClick}>
        {label}
      </button>
    </>
  )
}
export default Button
