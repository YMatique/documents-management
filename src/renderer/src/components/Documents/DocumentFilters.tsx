/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'

interface Document {
  id: number
  name: string
  case: string
  date: string
  fileType: string
}

interface Props {
  documents: Document[]
  onFilterChange: (filtered: Document[]) => void
}

const DocumentFilters: React.FC<Props> = ({ documents, onFilterChange }) => {
  const [selectedCase, setSelectedCase] = useState<string>('')
  const [selectedMonth, setSelectedMonth] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<string>('')

  const uniqueCases = Array.from(new Set(documents.map((doc) => doc.case)))

  const filterDocuments = () => {
    let filtered = [...documents]

    if (selectedCase) {
      filtered = filtered.filter((doc) => doc.case === selectedCase)
    }

    if (selectedMonth) {
      filtered = filtered.filter(
        (doc) => new Date(doc.date).getMonth() + 1 === parseInt(selectedMonth)
      )
    }

    if (sortOrder === 'A-Z') {
      filtered.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortOrder === 'Z-A') {
      filtered.sort((a, b) => b.name.localeCompare(a.name))
    } else if (sortOrder === 'Data ASC') {
      filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else if (sortOrder === 'Data DESC') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    onFilterChange(filtered)
  }

  return (
    <div className="flex gap-4">
      {/* Filtro por Caso */}
      <select
        className="border p-2 rounded"
        value={selectedCase}
        onChange={(e) => {
          setSelectedCase(e.target.value)
          filterDocuments()
        }}
      >
        <option value="">Todos os Casos</option>
        {uniqueCases.map((c, index) => (
          <option key={index} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Filtro por Mês */}
      <select
        className="border p-2 rounded"
        value={selectedMonth}
        onChange={(e) => {
          setSelectedMonth(e.target.value)
          filterDocuments()
        }}
      >
        <option value="">Todos os Meses</option>
        {[...Array(12).keys()].map((m) => (
          <option key={m} value={m + 1}>
            {new Date(0, m).toLocaleString('pt-BR', { month: 'long' })}
          </option>
        ))}
      </select>

      {/* Ordenação */}
      <select
        className="border p-2 rounded"
        value={sortOrder}
        onChange={(e) => {
          setSortOrder(e.target.value)
          filterDocuments()
        }}
      >
        <option value="">Ordenar</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="Data ASC">Data ↑</option>
        <option value="Data DESC">Data ↓</option>
      </select>
    </div>
  )
}

export default DocumentFilters
