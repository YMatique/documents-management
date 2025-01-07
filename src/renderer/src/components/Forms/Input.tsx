import React from 'react'

interface InputProps {
  label?: string // Texto do rótulo do input
  name: string // Nome do input
  type?: string // Tipo do input (text, password, email, etc.)
  placeholder?: string // Placeholder do input
  value?: string // Valor do input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void // Função ao alterar o valor
  error?: string // Mensagem de erro
  className?: string // Classes adicionais para customização
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  className
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium mb-2 dark:text-white text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border rounded-sm p-2.5 focus:outline-none bg-gray-50   focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-darkColor ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Input
