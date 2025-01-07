import Input from './Input'
import React, { useState } from 'react'
import Textarea from './Textarea'
function FormCategory(): JSX.Element {
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  return (
    <form action="">
      <div className="w-full flex flex-col">
        <div>
          <Input name="username" label="Username" placeholder="Digite seu nome" />
        </div>
        <div>
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!email ? 'O email é obrigatório' : undefined}
          />
        </div>
        <div>
          <Textarea
            name="description"
            label="Descrição"
            placeholder="Digite a descrição aqui..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={!description ? 'A descrição é obrigatória' : undefined}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
            Your name
          </label>
          <input
            type="text"
            id="success"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg outline-none focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Success input"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Well done!</span> Some success message.
          </p>
        </div>
      </div>
    </form>
  )
}

export default FormCategory
