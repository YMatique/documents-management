/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import Input from './Input'
import Select from './Select'
import { Role, User } from '@prisma/client'
import { UserRole } from '../../../types/Role'

interface UserFormProps {
  initialData?: User | null
  onSubmit: (data: { name: string; email: string; role: Role }) => void
  onCancel: () => void
}

const UserForm: React.FC<UserFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<Role | ''>('')

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setEmail(initialData.email)
      setRole(initialData.role)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !role) return // Evita envio sem dados
    onSubmit({ name, email, role })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col space-y-4">
        <Input
          name="name"
          label="Nome"
          type="text"
          placeholder="Digite o nome do usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!name ? 'O nome do usuário é obrigatório' : undefined}
        />

        <Input
          name="email"
          label="Email"
          placeholder="Digite o email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!email ? 'O email é obrigatório' : undefined}
        />

        <Select
          name="role"
          label="Função"
          placeholder="Selecione uma função..."
          options={UserRole}
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          error={!role ? 'A função é obrigatória' : undefined}
        />
      </div>

      {/* BOTÕES NO RODAPÉ */}
      <div className="flex justify-end gap-2 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}

export default UserForm
