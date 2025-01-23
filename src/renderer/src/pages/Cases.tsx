/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import HeaderPage from '@renderer/components/HeaderPage'
import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import Modal from '@renderer/components/Modal/Modal'
import CaseTable from '@renderer/components/Tables/CaseTable'
import ModalDelete from '@renderer/components/Modal/ModalDelete'
import { Link } from 'react-router-dom'
import { Cases as CasesDTO } from '@prisma/client'
import CaseForm from '@renderer/components/Forms/CaseForm'

const Cases: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const closeDeleteModal = () => setIsModalDeleteOpen(false)

  const [deletingCase, setDeletingCase] = useState<number | null>(null)

  const [cases, setCases] = useState<CasesDTO[]>([])

  const openDeleteModal = (id: number) => {
    setDeletingCase(id)
    setIsModalDeleteOpen(true)
  }
  useEffect(() => {
    window.context.getCases().then(setCases)
  }, [])
  const handleDeleteCase = async () => {
    if (deletingCase) {
      const isDeleted = await window.context.deleteCase(deletingCase)
      if (isDeleted) {
        setCases(cases.filter((c) => c.id !== deletingCase))
      }
    }
    closeDeleteModal()
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
            {/* <Link to="/cases/create"> */}
            <ButtonPrimary label="Cadastrar" className="" onClick={openModal} />
            {/* </Link> */}
          </div>
        </div>
      </HeaderPage>
      <div className="flex flex-col h-full">
        <CaseTable data={cases} onDelete={openDeleteModal} onView={() => {}} />
      </div>
      <Modal
        maxWidth="max-w-2xl"
        title="Cadastrar Caso"
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
        <CaseForm />
      </Modal>

      <ModalDelete
        isOpen={isModalDeleteOpen}
        onClose={closeDeleteModal}
        title="Eliminar a Categoria"
        onDelete={handleDeleteCase}
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
