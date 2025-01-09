import React, { useState } from 'react'
import HeaderPage from '@renderer/components/HeaderPage'
import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import ButtonDelete from '@renderer/components/Buttons/ButtonDelete'
import ButtonEdit from '@renderer/components/Buttons/ButtonEdit'
import Modal from '@renderer/components/Modal/Modal'
import ButtonDetails from '@renderer/components/Buttons/ButtonDetails'
import UserTable from '@renderer/components/Tables/UsersTable'
import FormUser from '@renderer/components/Forms/UserForm'
import ModalDelete from '@renderer/components/Modal/ModalDelete'

interface User {
  id: number
  name: string
  email: string
  role: string
}
const Users: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const closeDeleteModal = () => setIsModalDeleteOpen(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openModal = () => setIsModalOpen(true)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const closeModal = () => setIsModalOpen(false)
  const [users, setUsers] = useState([
    { id: 1, name: 'João Silva', email: 'joao@example.com', role: 'advogado' },
    { id: 2, name: 'Maria Oliveira', email: 'maria@example.com', role: 'assistente' },
    { id: 3, name: 'Carlos Almeida', email: 'carlos@example.com', role: 'admin' },
    { id: 4, name: 'Ana Costa', email: 'ana@example.com', role: 'advogado' },
    { id: 5, name: 'Paula Nunes', email: 'paula@example.com', role: 'assistente' },
    { id: 6, name: 'Rafael Souza', email: 'rafael@example.com', role: 'advogado' },
    { id: 7, name: 'Clara Mendes', email: 'clara@example.com', role: 'assistente' },
    { id: 8, name: 'Fernando Santos', email: 'fernando@example.com', role: 'admin' },
    { id: 9, name: 'Beatriz Silva', email: 'beatriz@example.com', role: 'advogado' },
    { id: 10, name: 'Lucas Ferreira', email: 'lucas@example.com', role: 'assistente' }
  ])
  const [editingUser, setEditingUser] = useState<User | null>(null)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleAddUser = () => {
    setEditingUser(null)
    setIsModalOpen(true)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEditUser = (user: User) => {
    setEditingUser(user)
    setIsModalOpen(true)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleDeleteUser = (id: number) => {
    setIsModalDeleteOpen(true)
    // setUsers(users.filter((user) => user.id !== id))
    // closeDeleteModal
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const deleteUser = () => {
    // setUsers(users.filter((user) => user.id !== id))
    setIsModalDeleteOpen(false)
  }
  return (
    <div className="flex flex-col  text-sm">
      <HeaderPage className="mb-8">
        <div className="flex">
          <div className="flex w-1/2 flex-col">
            <h4 className="text-lg font-normal">Usuários</h4>
            <p className="font-light text-sm">Usuários do sistema</p>
          </div>
          <div className="flex justify-center items-end mr-3 w-1/2 flex-col">
            <ButtonPrimary label="Cadastrar" className="" onClick={handleAddUser} />
          </div>
        </div>
      </HeaderPage>
      <div className="flex flex-col">
        <UserTable data={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
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
        <FormUser initialData={editingUser} />
      </Modal>

      <ModalDelete
        onClose={closeDeleteModal}
        onDelete={deleteUser}
        isOpen={isModalDeleteOpen}
        title="Eliminar o usuário"
      >
        <p className="text-gray-500 dark:text-neutral-500">
          Tem a certeza que pretende eliminar este usuário da aplicação? <br /> Note que esta ação é
          irreversível!
        </p>
      </ModalDelete>
    </div>
  )
}

export default Users
