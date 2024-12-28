import { ComponentProps } from 'react'
function HeaderPage({ className, children, ...props }: ComponentProps<'div'>): JSX.Element {
  return (
    <div className={`mt-4 flex flex-col ${className}`} {...props}>
      {children}
    </div>
  )
}

export default HeaderPage
