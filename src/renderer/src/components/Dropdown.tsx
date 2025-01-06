import React, { useState } from 'react'

// Define a interface para os itens do dropdown
interface DropdownItem {
  label: string
  href?: string // URL opcional
  onClick?: () => void // Função opcional para lidar com cliques
}

// Define a interface para as props do componente Dropdown
interface DropdownProps {
  label: string // Texto do botão principal do dropdown
  items: DropdownItem[] // Lista de itens no dropdown
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [labelAux, setLabelAux] = useState(label)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={toggleDropdown}
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-normal  border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50     disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
      >
        {labelAux}
        <svg
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute z-10 mt-12 min-w-60 bg-white shadow-md dark:bg-neutral-800 dark:border dark:border-neutral-700"
          role="menu"
        >
          <div className="p-1 space-y-0.5">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href || '#'}
                onClick={(e) => {
                  e.preventDefault() // Previne comportamento padrão do link
                  setLabelAux(item.label)
                  if (item.onClick) item.onClick() // Executa a função onClick se definida
                  setIsOpen(false) // Fecha o menu ao clicar
                }}
                className="flex items-center gap-x-3.5 py-2 px-3  text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
