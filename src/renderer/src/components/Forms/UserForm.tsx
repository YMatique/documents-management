import Input from './Input'
import React, { useEffect, useState } from 'react'
import Textarea from './Textarea'

interface User {
  id: number
  name: string
  email: string
  role: string
}
interface UserProps {
  initialData?: User | null
}
const FormUser: React.FC<UserProps> = ({ initialData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setEmail(initialData.email)
      setRole(initialData.role)
    }
  })
  return (
    <form onSubmit={() => {}}>
      <div className="w-full flex flex-col">
        <div>
          <Input
            name="name"
            label="Nome"
            type="text"
            placeholder="Digite o nome do usuário"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!name ? 'O nome do usuário é obrigatório' : undefined}
          />
        </div>
        <div>
          <Input
            name="email"
            label="Email"
            placeholder="Digite a Email aqui..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!email ? 'A Email é obrigatória' : undefined}
          />
        </div>
      </div>
    </form>
  )
}
export default FormUser
