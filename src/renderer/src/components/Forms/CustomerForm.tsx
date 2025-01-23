/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Input from './Input'

interface Customer {
  id: number
  name: string
  email: string
  phone: string
  address: string
}
interface CustomerFormProps {
  initialData?: Customer | null
  onSubmit: (data: { name: string; email: string; phone: string; address: string }) => void
  onCancel: () => void
}
const CustomerForm: React.FC<CustomerFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    if (initialData) {
      setAddress(initialData.address)
      setEmail(initialData.email)
      setName(initialData.name)
      setPhone(initialData.phone)
    }
  }, [])
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !phone || !address) return
    onSubmit({ name, email, phone, address })
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="w-full flex flex-col">
        <div className="mb-4">
          <Input
            name="name"
            placeholder="Nome do cliente"
            label="Nome"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="mb-4">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="mb-4">
          <Input
            name="phone"
            placeholder="Número de Celular"
            label="Celular"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </div>
        <div className="mb-4">
          <Input
            name="address"
            placeholder="Endereço"
            label="Endereço"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          />
        </div>
      </div>
      {/* BOTÕES NO RODAPÉ */}
      <div className="flex justify-end gap-2 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-900 font-semibold bg-gray-200 hover:bg-gray-300 "
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-gray-900 font-semibold bg-primary hover:bg-primary"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}

export default CustomerForm
