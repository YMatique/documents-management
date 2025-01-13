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
  onSubmit?: () => void
}
const CustomerForm: React.FC<CustomerFormProps> = ({ initialData, onSubmit }) => {
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
  })
  return (
    <form
      onSubmit={() => {
        onSubmit
      }}
    >
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
    </form>
  )
}

export default CustomerForm
