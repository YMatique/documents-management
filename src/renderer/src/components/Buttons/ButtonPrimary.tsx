interface ButtonProps {
  label: string
  onClick: () => void
  className: string
}
function ButtonPrimary({ label, onClick, className }: ButtonProps): JSX.Element {
  return (
    <button
      className={`bg-primary py-2 px-3 text-base font-medium   hover:bg-primary/80 text-[#1b1b1f] ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default ButtonPrimary
