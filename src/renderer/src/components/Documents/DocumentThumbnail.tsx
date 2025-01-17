import React from 'react'

interface Document {
  id: number
  name: string
  fileType: string
}

const fileIcons: Record<string, string> = {
  pdf: '📄',
  word: '📝',
  excel: '📊',
  image: '🖼️'
}

const DocumentThumbnail: React.FC<{ document: Document }> = ({ document }) => {
  return (
    <div className="border p-4 rounded shadow-sm flex flex-col items-center">
      <div className="text-4xl">{fileIcons[document.fileType] || '📁'}</div>
      <p className="text-sm mt-2 text-center">{document.name}</p>
    </div>
  )
}

export default DocumentThumbnail
