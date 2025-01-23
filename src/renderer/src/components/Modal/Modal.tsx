import React from 'react'

interface ModalProps {
  isOpen: boolean // Indica se o modal está aberto
  onClose: () => void // Função para fechar o modal
  children: React.ReactNode // Conteúdo do modal
  footer?: React.ReactNode
  title: string
  maxWidth?: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  children,
  footer,
  maxWidth = 'max-w-lg'
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-black bg-opacity-50">
      <div className={`bg-white dark:bg-[#1b1b1f]  shadow-lg ${maxWidth} w-full `}>
        <div className=" mb-4 border-b border-b-gray-200 dark:border-b-gray-600 ">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-base font-bold">{title}</h2>
            <button className="text-gray-400 hover:text-gray-600" onClick={onClose}>
              ✖
            </button>
          </div>
        </div>
        <div className="p-4">{children}</div>
        {footer && (
          <div className="border-t p-4 border-t-gray-200 dark:border-t-gray-600">{footer}</div>
        )}
      </div>
    </div>
  )
}

export default Modal
