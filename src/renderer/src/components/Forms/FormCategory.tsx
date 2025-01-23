/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Input from './Input'
import React, { useEffect, useState } from 'react'
import Textarea from './Textarea'
// import Select from './Select'
// import RadioGroup from './RadioOption'
// import FileUpload from './FileUpload'

// function FormCategory(): JSX.Element {
//   const [email, setEmail] = useState('')
//   const [description, setDescription] = useState('')
//   const [selectedCategory, setSelectedCategory] = useState('')
//   const [selected, setSelected] = useState<string>('tech')

//   const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const handleFileSelect = (files: FileList | null) => {
//     if (files) {
//       setUploadedFiles(Array.from(files))
//     }
//   }
//   return (
//     <form action="">
//       <div className="w-full flex flex-col">
//         <div>
//           <Input name="username" label="Username" placeholder="Digite seu nome" />
//         </div>
//         <div>
//           <Input
//             name="email"
//             label="Email"
//             type="email"
//             placeholder="Digite seu email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={!email ? 'O email é obrigatório' : undefined}
//           />
//         </div>
//         <div>
//           <Textarea
//             name="description"
//             label="Descrição"
//             placeholder="Digite a descrição aqui..."
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             error={!description ? 'A descrição é obrigatória' : undefined}
//           />
//         </div>
//         <div>
//           <Select
//             name="category"
//             label="Categoria"
//             placeholder="Selecione uma categoria..."
//             options={[
//               { value: 'tech', label: 'Tecnologia' },
//               { value: 'health', label: 'Saúde' },
//               { value: 'education', label: 'Educação' }
//             ]}
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             error={!selectedCategory ? 'A categoria é obrigatória' : undefined}
//           />
//         </div>
//         <div>
//           <RadioGroup
//             name="categories"
//             options={[
//               { label: 'Tecnologia', value: 'tech' },
//               { label: 'Saúde', value: 'health' },
//               { label: 'Educação', value: 'education' }
//             ]}
//             selectedValue={selected}
//             onChange={(value) => setSelected(value)}
//           />
//         </div>
//         <div>
//           <FileUpload id="file-upload" onFileSelect={handleFileSelect} />
//           <div className="mt-4">
//             <h2 className="font-semibold text-lg">Arquivos Selecionados:</h2>
//             <ul className="list-disc ml-6">
//               {uploadedFiles.map((file, index) => (
//                 <li key={index}>
//                   {file.name} - {Math.round(file.size / 1024)} KB
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             First name
//           </label>
//           <input
//             type="text"
//             id="first_name"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-blue-500"
//             placeholder="John"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
//             Your name
//           </label>
//           <input
//             type="text"
//             id="success"
//             className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg outline-none focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
//             placeholder="Success input"
//           />
//           <p className="mt-2 text-sm text-green-600 dark:text-green-500">
//             <span className="font-medium">Well done!</span> Some success message.
//           </p>
//         </div>
//       </div>
//     </form>
//   )
// }
interface Category {
  id: number
  name: string
  description: string
}
interface CategoryProps {
  initialData?: Category | null
  onSubmit: (data: { name: string; description: string }) => void
  onCancel: () => void
}
const FormCategory: React.FC<CategoryProps> = ({ initialData, onSubmit, onCancel }) => {
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (initialData) {
      setCategory(initialData.name)
      setDescription(initialData.description)
    }
  })

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!category || !description) return
    onSubmit({ name: category, description: description })
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="w-full flex flex-col">
        <div>
          <Input
            name="category"
            label="Cegoria"
            type="text"
            placeholder="Digite o nome da categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            error={!category ? 'O nome da categoria é obrigatório' : undefined}
          />
        </div>
        <div>
          <Textarea
            name="description"
            label="Descrição"
            placeholder="Digite a descrição aqui..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={!description ? 'A descrição é obrigatória' : undefined}
          />
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-900 font-semibold bg-gray-200 hover:bg-gray-300 "
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-gray-900 font-semibold bg-primary hover:bg-primary"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}
export default FormCategory
