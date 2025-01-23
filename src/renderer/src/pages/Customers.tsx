/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import CustomerForm from '@renderer/components/Forms/CustomerForm'
import HeaderPage from '@renderer/components/HeaderPage'
import Modal from '@renderer/components/Modal/Modal'
import ModalDelete from '@renderer/components/Modal/ModalDelete'
import CustomerTable from '@renderer/components/Tables/CustomerTable'
import { useEffect, useState } from 'react'
interface Customer {
  id: number
  name: string
  email: string
  phone: string
  address: string
}
const Customers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const closeModal = () => setIsModalOpen(false)
  const closeDeleteModal = () => setIsModalDeleteOpen(false)
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    window.context.getCustomers().then(setCustomers)
  }, [])
  const [editCustomer, setEditCustomer] = useState<Customer | null>(null)
  const handleDeleteCostumer = (id: number) => {
    setIsModalDeleteOpen(true)
  }
  const handleEditCustomer = (customer: Customer) => {
    setEditCustomer(customer)
    setIsModalOpen(true)
  }
  const handleAddCostumer = () => {
    setEditCustomer(null)
    setIsModalOpen(true)
  }
  return (
    <div className="flex flex-col  text-sm h-full">
      <HeaderPage className="mb-8">
        <div className="flex">
          <div className="flex w-1/2 flex-col">
            <h4 className="text-lg font-normal">Clientes</h4>
            <p className="font-light text-sm">Todos os Clientes</p>
          </div>
          <div className="flex justify-center items-end mr-3 w-1/2 flex-col">
            <ButtonPrimary label="Cadastrar" className="" onClick={handleAddCostumer} />
          </div>
        </div>
      </HeaderPage>
      <div className="flex flex-col h-full">
        <CustomerTable
          data={customers}
          onDelete={handleDeleteCostumer}
          onEdit={handleEditCustomer}
        />
      </div>
      <Modal
        title="Adicionar Usuário"
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
        <CustomerForm initialData={editCustomer} />
      </Modal>

      <ModalDelete
        isOpen={isModalDeleteOpen}
        onClose={closeDeleteModal}
        title="Eliminar a Categoria"
        onDelete={() => {}}
      >
        <p className="text-gray-500 dark:text-neutral-500">
          Tem a certeza que pretende eliminar este cliente da aplicação?
        </p>
      </ModalDelete>
    </div>
  )
}

export default Customers
