/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import DocumentFilters from './DocumentFilters'
import DocumentThumbnail from './DocumentThumbnail'
import ContextMenu from '../ContextMenu'

interface Document {
  id: number
  name: string
  case: string
  date: string
  fileType: string
}

const documentsData: Document[] = [
  { id: 1, name: 'Contrato.pdf', case: 'Caso A', date: '2024-01-10', fileType: 'pdf' },
  { id: 2, name: 'Processo.docx', case: 'Caso B', date: '2024-02-15', fileType: 'word' },
  { id: 3, name: 'Evidências.png', case: 'Caso A', date: '2024-03-20', fileType: 'image' },
  { id: 4, name: 'Relatório.xlsx', case: 'Caso C', date: '2024-04-05', fileType: 'excel' },
  { id: 5, name: 'Declaração.pdf', case: 'Caso D', date: '2024-05-11', fileType: 'pdf' },
  { id: 6, name: 'Notas Reunião.docx', case: 'Caso B', date: '2024-06-22', fileType: 'word' },
  { id: 7, name: 'Balanço.xlsx', case: 'Caso A', date: '2024-07-18', fileType: 'excel' },
  { id: 8, name: 'Foto Crime.png', case: 'Caso C', date: '2024-08-02', fileType: 'image' },
  { id: 9, name: 'Contrato Arrendamento.pdf', case: 'Caso D', date: '2024-09-30', fileType: 'pdf' },
  { id: 10, name: 'Regulamento.docx', case: 'Caso E', date: '2024-10-21', fileType: 'word' },
  { id: 11, name: 'Transcrição.docx', case: 'Caso A', date: '2024-11-10', fileType: 'word' },
  { id: 12, name: 'Imagem Segurança.png', case: 'Caso B', date: '2024-12-05', fileType: 'image' },
  { id: 13, name: 'Despacho.pdf', case: 'Caso C', date: '2023-01-15', fileType: 'pdf' },
  { id: 14, name: 'Resumo Execução.xlsx', case: 'Caso D', date: '2023-02-07', fileType: 'excel' },
  { id: 15, name: 'Laudo Pericial.pdf', case: 'Caso E', date: '2023-03-29', fileType: 'pdf' }
]

const options = [
  {
    label: 'Abrir',
    action: () => {
      alert(`Abrindo`)
    }
  },
  { label: 'Baixar', action: () => alert(`Baixando `) },
  { label: 'Excluir', action: () => alert(`Excluindo }`) }
]

const DocumentList: React.FC = () => {
  const [filteredDocs, setFilteredDocs] = useState<Document[]>(documentsData)

  const handleFilterChange = (filtered: Document[]) => {
    setFilteredDocs(filtered)
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Documentos</h1>

      {/* Filtros */}
      <DocumentFilters documents={documentsData} onFilterChange={handleFilterChange} />

      {/* Lista de documentos */}
      <div className="grid grid-cols-5 gap-4 mt-4 relative">
        {filteredDocs.map((doc) => (
          <ContextMenu
            key={doc.id}
            options={options}
            // onClose={}
            // children={}
          >
            <DocumentThumbnail key={doc.id} document={doc} />
          </ContextMenu>
        ))}
      </div>
    </div>
  )
}

export default DocumentList
