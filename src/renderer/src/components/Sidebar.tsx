import { ComponentProps } from 'react'

function SideBar({ className, children, ...props }: ComponentProps<'aside'>): JSX.Element {
  return (
    <aside
      className={`w-64 min-w-64 xl:min-w-72 h-[100vh] bg-[#1b1b1f] border border-[#1b1b1f] border-r-[#33333b] overflow-auto ${className}`}
      {...props}
    >
      {children}
    </aside>
  )
}

export default SideBar
