/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import HeaderPage from '@renderer/components/HeaderPage'
import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import Modal from '@renderer/components/Modal/Modal'
import FormCategory from '@renderer/components/Forms/FormCategory'
import CategoryTable from '@renderer/components/Tables/CategoryTable'
import ModalDelete from '@renderer/components/Modal/ModalDelete'
import { Category } from '@prisma/client'

const Categories: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const [editCategory, setEditCategory] = useState<Category | null>(null)
  const [deletingCategory, setDeletingCategory] = useState<number | null>(null)

  const openCreateModal = () => {
    setEditCategory(null)
    setIsModalOpen(true)
  }
  const openEditModal = (category: Category) => {
    setEditCategory(category)
    setIsModalOpen(true)
  }
  const openDeleteModal = (id: number) => {
    setIsModalDeleteOpen(true)
    setDeletingCategory(id)
  }

  const closeModal = () => setIsModalOpen(false)
  const closeDeleteModal = () => setIsModalDeleteOpen(false)
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    window.context.getCategory().then(setCategories)
  }, [])

  const handleCategorySubmit = async (data: { name: string; description: string }) => {
    if (editCategory) {
      // await window.context.
      console.log(data)
    } else {
      // await window.context.cr
      console.log(data)
    }
  }
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
            <ButtonPrimary label="Cadastrar" className="" onClick={openCreateModal} />
          </div>
        </div>
      </HeaderPage>
      <div className="flex flex-col">
        <CategoryTable data={categories} onEdit={openEditModal} onDelete={openDeleteModal} />
      </div>
      <Modal title="Adicionar Categoria" isOpen={isModalOpen} onClose={closeModal}>
        <FormCategory
          initialData={editCategory}
          onCancel={closeModal}
          onSubmit={handleCategorySubmit}
        />
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

export default Categories
