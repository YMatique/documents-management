import React, { useState } from 'react'
import { ipcRenderer } from 'electron'

const CreateCase = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [documents, setDocuments] = useState<File[]>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setDocuments(Array.from(event.target.files))
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!title || !description || documents.length === 0) {
      alert('Preencha todos os campos e adicione documentos.')
      return
    }

    // Enviar dados para o processo principal (Electron)
    ipcRenderer.send('submit-case', { title, description, documents })
  }

  return (
    <div>
      <h1>Criar Caso</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div>
          <label>Descrição</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        <div>
          <label>Documentos</label>
          <input type="file" multiple onChange={handleFileChange} required />
        </div>

        <button type="submit">Submeter Caso</button>
      </form>
    </div>
  )
}

export default CreateCase
