/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import docPdf from '../assets/Wise Corretores de Seguro - BRD.pdf'
// import path from 'node:path'
// import fs from 'node:fs'

// Tipo para as props do componente
interface PdfViewerProps {
  file: string // Caminho ou URL do arquivo PDF
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  '../scripts/pdfjs/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

// const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'))
// const pdfWorkerPaht = path.join(pdfjsDistPath, 'build', 'pdf.worker.mjs')
// fs.cpSync(pdfWorkerPaht, './dist/pdf.worker.mjs', { recursive: true })
const PdfViewer: React.FC<PdfViewerProps> = ({ file }) => {
  const [numPages, setNumPages] = useState<number>(0) // Número total de páginas
  const [pageNumber] = useState<number>(1) // Vamos exibir sempre a primeira página
  // console.log(pdfjs.GlobalWorkerOptions.workerSrc);

  // Função para atualizar o número de páginas quando o PDF for carregado
  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  return (
    <div className="h-44 w-40 p-4 min-w-40 ">
      <div className="bg-white border border-gray-300 w-full h-full shadow-lg  flex justify-center">
        <Document
          className="h-full"
          file={docPdf}
          onLoadSuccess={onLoadSuccess}
          loading="Carregando PDF..."
        >
          <Page
            pageNumber={1}
            // className="mx-auto"
            // width={192}
            // scale={0.7}
            height={128}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            onClick={() => {
              console.log('clicado')
            }}
          />
        </Document>
      </div>

      {/* {numPages > 0 && <p>1 de {numPages} páginas</p>}
      <p>{pdfjs.GlobalWorkerOptions.workerSrc}</p> */}
    </div>
  )
}

export default PdfViewer
