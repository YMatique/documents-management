/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// import React, { useEffect, useRef } from 'react'

// interface ContextMenuProps {
//   options: { label: string; action: () => void }[]
//   position: { x: number; y: number }
//   onClose: () => void
// }

// const ContextMenu: React.FC<ContextMenuProps> = ({ options, position, onClose }) => {
//   const menuRef = useRef<HTMLDivElement>(null)

//   // Fecha o menu ao clicar fora
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         onClose()
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [onClose])

//   return (
//     <div
//       ref={menuRef}
//       style={{
//         top: `${position.y}px`,
//         left: `${position.x}px`,
//         position: 'absolute',
//         zIndex: 50
//       }}
//       className="bg-white shadow-lg border rounded-md w-48"
//     >
//       {options.map((option, index) => (
//         <button
//           key={index}
//           onClick={() => {
//             option.action()
//             onClose()
//           }}
//           className="w-full text-left px-4 py-2 hover:bg-gray-200"
//         >
//           {option.label}
//         </button>
//       ))}
//     </div>
//   )
// }

// export default ContextMenu

import React, { ReactNode, useEffect, useRef, useState } from 'react'

interface ContextMenuProps {
  children: ReactNode
  options: { label: string; action: () => void; icon?: ReactNode }[]
}

const ContextMenu: React.FC<ContextMenuProps> = ({ options, children }) => {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const contextRef = useRef<HTMLDivElement>(null)

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault()
    const x = event.pageX - 550 // Evita sair da tela
    const y = event.pageX - 650
    setPosition({ x, y })
    setVisible(true)
    // alert(event.pageX - 250)
    // alert(event.pageX - 250)
  }

  // Fecha o menu ao clicar em qualquer lugar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contextRef.current && !contextRef.current.contains(event.target as Node)) {
        setVisible(false)
      }
    }

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [visible])

  return (
    <div onContextMenu={handleContextMenu} className="relative">
      {visible && (
        <div
          ref={contextRef}
          style={{
            // top: `${position.y}px`,
            // left: `${position.x}px`,
            // position: 'absolute',
            zIndex: 10
          }}
          className="min-w-60 right-0 top-0 transition duration-500 bg-white absolute shadow-md rounded-sm -mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
        >
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                option.action()
                setVisible(false)
              }}
              className="w-full flex items-center gap-x-3 py-1.5 px-3 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              {/* <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line>
              </svg> */}
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}
      {children}
    </div>
  )
}

export default ContextMenu
