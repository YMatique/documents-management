/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
import React, { ReactElement, ReactNode, useState } from 'react'

interface TabProps {
  children: ReactElement[]
}
interface TabPanesProps {
  label: string
  children: ReactNode
}
const Tabs: React.FC<TabProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <div className="flex flex-col">
        <div className="border-b w-full border-gray-200 dark:border-neutral-700">
          <nav className="flex gap-x-1" aria-orientation="horizontal">
            {children.map((child, index) => (
              <button
                key={index}
                type="button"
                className={`${activeTab === index ? 'dark:border-primary text-gray-700 border-gray-700 dark:text-primary font-semibold' : ''} py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-700 hover:text-primary focus:outline-none dark:focus:text-primary focus:text-gray-700  disabled:opacity-50 disabled:pointer-events-none dark:text-gray-200 dark:hover:text-primary`}
                onClick={() => setActiveTab(index)}
              >
                {child.props.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-4">{children[activeTab]}</div>
      </div>
    </>
  )
}

const TabPane: React.FC<TabPanesProps> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>
}
export { Tabs, TabPane }
