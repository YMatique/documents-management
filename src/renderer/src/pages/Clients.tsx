import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import HeaderPage from '@renderer/components/HeaderPage'
import Modal from '@renderer/components/Modal/Modal'
import { useState } from 'react'

const Customers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const closeModal = () => setIsModalOpen(false)
  return (
    <div className="flex flex-col  text-sm h-full">
      <HeaderPage className="mb-8">
        <div className="flex">
          <div className="flex w-1/2 flex-col">
            <h4 className="text-lg font-normal">Casos</h4>
            <p className="font-light text-sm">Todos os Casos</p>
          </div>
          <div className="flex justify-center items-end mr-3 w-1/2 flex-col">
            <ButtonPrimary
              label="Cadastrar"
              className=""
              onClick={() => {
                setIsModalOpen(true)
              }}
            />
          </div>
        </div>
      </HeaderPage>
      <div className="flex flex-col h-full"></div>
      <Modal
        title="hjhj"
        isOpen={isModalOpen}
        onClose={closeModal}
        footer={
          <div className="flex justify-end gap-2">
            <button
              onClick={closeModal}
              className="px-2 py-2 bg-gray-500 text-white text-sm hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              form="formulario-modal"
              className="px-2 py-2 bg-blue-500 text-white hover:bg-blue-600"
            >
              Salvar
            </button>
          </div>
        }
      ></Modal>
    </div>
  )
}

export default Customers
