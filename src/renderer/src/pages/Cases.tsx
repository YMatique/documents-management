/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import HeaderPage from '@renderer/components/HeaderPage'
import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import Modal from '@renderer/components/Modal/Modal'
import CaseTable from '@renderer/components/Tables/CaseTable'
import ModalDelete from '@renderer/components/Modal/ModalDelete'
import { Link } from 'react-router-dom'

interface Cases {
  id: number
  title: string
  tasks: number
  status: string
  docs: number
}
const Cases: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const closeDeleteModal = () => setIsModalDeleteOpen(false)

  const [cases, setCases] = useState([
    {
      id: 1,
      title: 'Jurisdição mal feita',
      tasks: 10,
      docs: 10,
      code: 13243,
      status: 'Pendende'
    },
    {
      id: 2,
      title: 'Família não dada mantimento',
      tasks: 4,
      docs: 6,
      code: 11243,
      status: 'Arquivado'
    },
    {
      id: 3,
      title: 'Bla bla abla',
      tasks: 5,
      code: 63243,
      docs: 2,
      status: 'Pendende'
    },
    {
      id: 4,
      title: 'Jurisdição mal feita',
      tasks: 10,
      code: 20241030,
      docs: 10,
      status: 'Pendende'
    },
    {
      id: 5,
      title: 'Nada bom',
      tasks: 10,
      code: 20240430,
      docs: 10,
      status: 'Pendende'
    },
    {
      id: 6,
      title: 'Caso mal parado',
      tasks: 5,
      code: 13243,
      docs: 8,
      status: 'Em andamento'
    }
  ])

  const handleDeleteCase = (id: number) => {
    setIsModalDeleteOpen(true)
  }

  const handleEditCase = (id: number) => {}
  return (
    <div className="flex flex-col  text-sm h-full">
      <HeaderPage className="mb-8">
        <div className="flex">
          <div className="flex w-1/2 flex-col">
            <h4 className="text-lg font-normal">Casos</h4>
            <p className="font-light text-sm">Todos os Casos</p>
          </div>
          <div className="flex justify-center items-end mr-3 w-1/2 flex-col">
            <Link to="/cases/create">
              <ButtonPrimary label="Cadastrar" className="" onClick={openModal} />
            </Link>
          </div>
        </div>
      </HeaderPage>
      <div className="flex flex-col h-full">
        <CaseTable data={cases} onDelete={handleDeleteCase} onView={() => {}} />
      </div>
      {/* <Modal
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
      >
        <p>Este é o conteúdo do modal.</p>
      </Modal> */}

      <ModalDelete
        isOpen={isModalDeleteOpen}
        onClose={closeDeleteModal}
        title="Eliminar a Categoria"
        onDelete={() => {}}
      >
        <p className="text-gray-500 dark:text-neutral-500">
          Tem a certeza que pretende eliminar esta categoria da aplicação? <br /> Note que esta ação
          é irreversível!
        </p>{' '}
      </ModalDelete>
    </div>
  )
}

export default Cases
