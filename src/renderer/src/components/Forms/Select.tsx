import React from 'react'

interface SelectOption {
  value: string // Valor da opção
  label: string // Texto visível da opção
}

interface SelectProps {
  label?: string // Texto do rótulo do select
  name: string // Nome do select
  options: SelectOption[] // Lista de opções para o select
  value?: string // Valor selecionado
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void // Função ao alterar o valor
  error?: string // Mensagem de erro
  placeholder?: string // Placeholder como primeira opção desativada
  className?: string // Classes adicionais para customização
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  placeholder = 'Selecione uma opção...',
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
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`border rounded-sm p-2.5 focus:outline-none bg-gray-50 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-darkColor ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Select
