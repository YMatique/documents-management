interface ButtonProps {
  label: string
  onClick: () => void
  className: string
}
function ButtonSecondary({ label, onClick, className }: ButtonProps): JSX.Element {
  return (
    <button
      className={`bg-secondary p-2 pl-4 pr-4 text-base hover:bg-secondary/80 text-[#1b1b1f] ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default ButtonSecondary