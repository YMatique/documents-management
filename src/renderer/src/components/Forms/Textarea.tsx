import React from 'react'

interface TextareaProps {
  label?: string // Texto do rótulo do textarea
  name: string // Nome do textarea
  placeholder?: string // Placeholder do textarea
  value?: string // Valor do textarea
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void // Função ao alterar o valor
  error?: string // Mensagem de erro
  className?: string // Classes adicionais para customização
  rows?: number //
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  className,
  rows = 4
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
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border rounded-sm p-2.5 focus:outline-none bg-gray-50 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-darkColor ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
        }`}
        rows={rows} // Número padrão de linhas
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Textarea
