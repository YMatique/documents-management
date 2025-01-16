/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'

// Tipo para as props do componente
interface PdfViewerProps {
  file: string // Caminho ou URL do arquivo PDF
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file }) => {
  const [numPages, setNumPages] = useState<number>(0) // Número total de páginas
  const [pageNumber] = useState<number>(1) // Vamos exibir sempre a primeira página

  // Função para atualizar o número de páginas quando o PDF for carregado
  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  return (
    <div className="pdf-viewer">
      <Document file={file} onLoadSuccess={onLoadSuccess} loading="Carregando PDF...">
        <Page pageNumber={pageNumber} />
      </Document>
      {numPages > 0 && <p>1 de {numPages} páginas</p>}
    </div>
  )
}

export default PdfViewer
