interface ButtonProps {
  label: string
  onClick: () => void
  className: string
}
function Button({ label, className, onClick }: ButtonProps): JSX.Element {
  return (
    <>
      <button className={'p-4 bg-slate-700 text-white' + { className }} onClick={onClick}>
        {label}
      </button>
    </>
  )
}

export default Button
