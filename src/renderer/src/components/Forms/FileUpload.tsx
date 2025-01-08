import React, { useState } from 'react'

interface FileUploadProps {
  id: string
  accept?: string
  onFileSelect?: (files: FileList | null) => void
  className?: string
}

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  accept = 'image/*',
  onFileSelect,
  className = ''
}) => {
  const [isDragging, setIsDragging] = useState(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (onFileSelect) {
      onFileSelect(files)
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onFileSelect) {
      onFileSelect(e.target.files)
    }
  }

  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <label
        htmlFor={id}
        className={`flex flex-col items-center justify-center w-full h-64 border-2 rounded-lg cursor-pointer bg-gray-50 dark:bg-darkColor ${
          isDragging
            ? 'border-blue-500 bg-blue-50 dark:border-blue-500 dark:bg-blue-900'
            : 'border-gray-300 border-dashed dark:border-gray-700'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id={id} type="file" accept={accept} onChange={handleChange} className="hidden" />
      </label>
    </div>
  )
}

export default FileUpload
