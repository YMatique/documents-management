import React from 'react'

interface ModalProps {
  isOpen: boolean // Indica se o modal está aberto
  onClose: () => void // Função para fechar o modal
  children: React.ReactNode // Conteúdo do modal
  footer?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, footer }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#1b1b1f]  shadow-lg max-w-md w-full ">
        <div className=" mb-4 border-b border-b-gray-600">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-base font-bold">Título do Modal</h2>
            <button className="text-gray-400 hover:text-gray-600" onClick={onClose}>
              ✖
            </button>
          </div>
        </div>
        <div className="p-4">{children}</div>
        {footer && <div className="border-t border-t-gray-600 p-4">{footer}</div>}
      </div>
    </div>
  )
}

export default Modal
