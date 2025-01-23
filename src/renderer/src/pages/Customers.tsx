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
  const [editCustomer, setEditCustomer] = useState<Customer | null>(null)

  useEffect(() => {
    window.context.getCustomers().then(setCustomers)
  }, [])

  const openCreateModal = () => {
    setEditCustomer(null)
    setIsModalOpen(true)
  }
  const openEditModal = (customer: Customer) => {
    setIsModalOpen(true)
    setEditCustomer(customer)
  }
  const openDeleteModal = () => {
    setIsModalDeleteOpen(true)
  }

  const handleOnSubmitCustomer = async (data: {
    name: string
    email: string
    phone: string
    address: string
  }) => {
    if (editCustomer) {
      const updateCustomer = { ...editCustomer, ...data }
      await window.context.updateCustomer(updateCustomer)
      setCustomers(customers.map((c) => (c.id === updateCustomer.id ? updateCustomer : c)))
    } else {
      const customer = await window.context.createCustomer(data)
      setCustomers([...customers, customer])
    }
    closeModal()
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
            <ButtonPrimary label="Cadastrar" className="" onClick={openCreateModal} />
          </div>
        </div>
      </HeaderPage>
      <div className="flex flex-col h-full">
        <CustomerTable data={customers} onDelete={openDeleteModal} onEdit={openEditModal} />
      </div>
      <Modal
        title={editCustomer ? 'Editar Cliente' : 'Cadastrar Cliente'}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <CustomerForm
          initialData={editCustomer}
          onCancel={closeModal}
          onSubmit={handleOnSubmitCustomer}
        />
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
