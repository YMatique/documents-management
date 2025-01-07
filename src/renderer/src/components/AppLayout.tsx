import { ComponentProps } from 'react'

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
      className={`flex-grow flex flex-col pt-4 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-[#1b1b1f] bg-opacity-95 dark:bg-opacity-95 border-l-primary ${className}`}
      {...props}
    >
      <div className="p-4 flex-grow flex flex-col ">{children}</div>
    </div>
  )
}
