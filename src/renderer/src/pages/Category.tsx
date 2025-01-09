import React, { useState } from 'react'
import HeaderPage from '@renderer/components/HeaderPage'
import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import Modal from '@renderer/components/Modal/Modal'
import FormCategory from '@renderer/components/Forms/FormCategory'
import CategoryTable from '@renderer/components/Tables/CategoryTable'
import ModalDelete from '@renderer/components/Modal/ModalDelete'

interface Category {
  id: number
  name: string
  description: string
}
const Category: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openModal = () => setIsModalOpen(true)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const closeModal = () => setIsModalOpen(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openDeleteModal = () => setIsModalDeleteOpen(true)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const closeDeleteModal = () => setIsModalDeleteOpen(false)

  const [editCategory, setEditCategory] = useState<Category | null>(null)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleAddCategory = () => {
    setEditCategory(null)
    setIsModalOpen(true)
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEditCategory = (category: Category) => {
    setEditCategory(category)
    setIsModalOpen(true)
  }

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Família',
      description: 'aads asd asd '
    },
    {
      id: 2,
      name: 'Civil',
      description: 'aads asd asd '
    },
    {
      id: 3,
      name: 'Roubo',
      description: 'aads asd asd '
    }
  ])
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleDeleteCategory = (category: Category) => {
    setIsModalDeleteOpen(true)
    console.log(category)

    // setCategories(categories.filter((c) => c.id !== category.id))
  }
  return (
    <div className="flex flex-col  text-sm">
      <HeaderPage className="mb-8">
        <div className="flex">
          <div className="flex w-1/2 flex-col">
            <h4 className="text-lg font-normal">Categorias</h4>
            <p className="font-light text-sm">Todas as Categoria de Casos</p>
          </div>
          <div className="flex justify-center items-end mr-3 w-1/2 flex-col">
            <ButtonPrimary label="Cadastrar" className="" onClick={handleAddCategory} />
          </div>
        </div>
      </HeaderPage>
      <div className="flex flex-col">
        <CategoryTable
          data={categories}
          onEdit={handleEditCategory}
          onDelete={handleDeleteCategory}
        />
      </div>
      <Modal
        title="Adicionar Categoria"
        isOpen={isModalOpen}
        onClose={closeModal}
        footer={
          <div className="flex justify-end gap-2">
            <button
              onClick={closeModal}
              className="px-2 py-2 bg-gray-500 text-white text-sm hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              form="formulario-modal"
              className="px-2 py-2 bg-blue-500 text-white hover:bg-blue-600"
            >
              Salvar
            </button>
          </div>
        }
      >
        <FormCategory initialData={editCategory} />
      </Modal>

      <ModalDelete
        isOpen={isModalDeleteOpen}
        onClose={closeDeleteModal}
        title="Eliminar a Categoria"
        onDelete={() => handleDeleteCategory}
      >
        <p className="text-gray-500 dark:text-neutral-500">
          Tem a certeza que pretende eliminar esta categoria da aplicação? <br /> Note que esta ação
          é irreversível!
        </p>
      </ModalDelete>
    </div>
  )
}

export default Category
