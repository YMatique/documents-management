/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

// Tipo para as props do componente
interface PdfViewerProps {
  file: string // Caminho ou URL do arquivo PDF
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  '../scripts/pdfjs/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

const PdfViewer: React.FC<PdfViewerProps> = ({ file }) => {
  // const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber] = useState<number>(1)

  // Função para atualizar o número de páginas quando o PDF for carregado
  // const onLoadSuccess = ({ numPages }: { numPages: number }) => {
  //   setNumPages(numPages)
  // }

  return (
    <div className="h-48 w-40 p-4 min-w-40 mb-4 ">
      <div className="bg-white border border-gray-300 w-full h-36 shadow-lg  flex justify-center relative">
        <Document
          className="h-full"
          file={file}
          // onLoadSuccess={onLoadSuccess}
          loading="Carregando PDF..."
        >
          <Page
            pageNumber={pageNumber}
            height={128}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      <p className=" line-clamp-2 text-ellipsis dark:text-gray-500">
        Documento x asgha sfhads fasjfa
      </p>
    </div>
  )
}

export default PdfViewer
