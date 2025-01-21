/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react'
import HeaderPage from '@renderer/components/HeaderPage'
import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import Modal from '@renderer/components/Modal/Modal'
import UserTable from '@renderer/components/Tables/UsersTable'
import FormUser from '@renderer/components/Forms/UserForm'
import ModalDelete from '@renderer/components/Modal/ModalDelete'
import { User } from '@prisma/client'

// interface User {
//   id: number
//   name: string
//   email: string
//   role: string
// }
const Users: React.FC = () => {
  const getUserFromDB = async () => await window.context.getUsers() //.then((e) => e)
  useEffect(() => {
    getUserFromDB().then((e: User[]) => {
      // console.log(e)
      setUsers(e)
    })
  }, [])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const closeDeleteModal = () => setIsModalDeleteOpen(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openModal = () => setIsModalOpen(true)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const closeModal = () => setIsModalOpen(false)
  const [users, setUsers] = useState<User[]>([])
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
