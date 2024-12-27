import { ComponentProps } from 'react'
import CustomHeader from './CustomHeader'

export const RootLayout = ({
  children,
  className,
  ...props
}: ComponentProps<'main'>): JSX.Element => {
  return (
    <main className={`flex flex-row w-full h-screen ${className}`} {...props}>
      {children}
    </main>
  )
}

export const MainContent = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>): JSX.Element => {
  return (
    <div
      className={`flex-grow flex flex-col  bg-[#1b1b1f]/90 border-l-primary ${className}`}
      {...props}
    >
      <CustomHeader />
      <div className="p-4 flex-grow flex flex-col">{children}</div>
    </div>
  )
}
