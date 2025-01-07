import React from 'react'

interface RadioOption {
  label: string // Rótulo visível
  value: string // Valor associado ao botão
}

interface RadioGroupProps {
  name: string // Nome do grupo (necessário para agrupar os botões)
  options: RadioOption[] // Lista de opções
  selectedValue: string // Valor atualmente selecionado
  onChange: (value: string) => void // Função chamada ao selecionar
  className?: string // Classes extras para customização
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  className = ''
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700 dark:text-gray-200">{option.label}</span>
        </label>
      ))}
    </div>
  )
}

export default RadioGroup
