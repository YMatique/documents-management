/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import HeaderPage from '@renderer/components/HeaderPage'
import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import Modal from '@renderer/components/Modal/Modal'
import UserTable from '@renderer/components/Tables/UsersTable'
import UserForm from '@renderer/components/Forms/UserForm'
import ModalDelete from '@renderer/components/Modal/ModalDelete'
import { User, Role } from '@prisma/client'

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [deletingUser, setDeletingUser] = useState<number | null>(null)

  // Buscar usuários do banco
  useEffect(() => {
    window.context.getUsers().then(setUsers)
  }, [])

  // Abrir/Cerrar modais
  const openCreateModal = () => {
    setEditingUser(null)
    setIsModalOpen(true)
  }

  const openEditModal = (user: User) => {
    setEditingUser(user)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)
  const closeDeleteModal = () => setIsModalDeleteOpen(false)

  // Criar ou editar usuário
  const handleUserSubmit = async (data: { name: string; email: string; role: Role }) => {
    if (editingUser) {
      // Atualizar usuário existente
      const updatedUser = { ...editingUser, ...data }
      // await window.context.updateUser(updatedUser)
      console.log(data)

      setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)))
    } else {
      // Criar novo usuário
      console.log(data)
      // const newUser = await
      // const newUser = await window.context.createUser(data)
      // setUsers([...users, newUser])
    }
    closeModal()
  }

  // Excluir usuário
  const openDeleteModal = (id: number) => {
    setDeletingUser(id)
    setIsModalDeleteOpen(true)
  }

  const deleteUser = async () => {
    if (deletingUser) {
      const isDeleted = await window.context.deleteUser(deletingUser)
      if (isDeleted) {
        setUsers(users.filter((user) => user.id !== deletingUser))
      }
    }
    closeDeleteModal()
  }

  return (
    <div className="flex flex-col text-sm">
      <HeaderPage className="mb-8">
        <div className="flex justify-between">
          <div>
            <h4 className="text-lg font-normal">Usuários</h4>
            <p className="font-light text-sm">Usuários do sistema</p>
          </div>
          <ButtonPrimary className="" label="Cadastrar" onClick={openCreateModal} />
        </div>
      </HeaderPage>

      <UserTable data={users} onEdit={openEditModal} onDelete={openDeleteModal} />

      <Modal
        title={editingUser ? 'Editar Usuário' : 'Adicionar Usuário'}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <UserForm onCancel={closeModal} onSubmit={handleUserSubmit} initialData={editingUser} />
      </Modal>

      <ModalDelete
        isOpen={isModalDeleteOpen}
        onClose={closeDeleteModal}
        onDelete={deleteUser}
        title="Excluir Usuário"
      >
        <p>Tem certeza que deseja excluir este usuário?</p>
      </ModalDelete>
    </div>
  )
}

export default Users
