interface ButtonProps {
  label: string
  onClick: () => void
  className: string
}
function ButtonPrimary({ label, onClick, className }: ButtonProps): JSX.Element {
  return (
    <button
      className={`bg-primary p-2 text-sm hover:bg-primary/80 text-[#1b1b1f] ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default ButtonPrimary
