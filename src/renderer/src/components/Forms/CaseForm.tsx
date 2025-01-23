/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react'
import ButtonPlus from '../Buttons/ButtonPlus'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import Input from './Input'
import Select from './Select'
import Textarea from './Textarea'
import getCategoriesHook from '@renderer/custom-hooks/getCategories'
import labeledCategoriesHook from '@renderer/custom-hooks/labeledCategory'
import getCustomersHook from '@renderer/custom-hooks/getCustomers'

const CaseForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => setIsModalOpen(false)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const categories = labeledCategoriesHook()
  const customers = getCustomersHook()

  useEffect(() => {}, [])
  return (
    <div>
      <div>
        <form action="" className=" ">
          <div className="flex flex-wrap">
            <div className="md:w-2/3 bg-white dark:bg-darkColor p-4 pt-4">
              <div className="mb-4">
                <Input
                  label="Título do Caso"
                  name="title"
                  placeholder="Título do caso"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                />
              </div>
              <div className="mb-4">
                <Select
                  name="category"
                  label="Categoria"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value)
                  }}
                  options={categories}
                />
              </div>
              <div>
                <Textarea
                  label="Descrição do Caso"
                  name="description"
                  placeholder="Escreva a descrição do caso"
                  rows={8}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/3 md:pl-8 ">
              <div className="bg-white dark:bg-darkColor p-4">
                <div className="mb-4">
                  <h4 className="font-semibold  flex justify-between align-middle items-center border-b-gray-400 dark:border-b-gray-700 border border-x-0 border-t-0">
                    <span>Cliente</span>{' '}
                    <ButtonPlus
                      onClick={() => {
                        setIsModalOpen(true)
                      }}
                      className=""
                    />{' '}
                  </h4>
                </div>

                <div className="mb-4">
                  <Select options={customers} label="Clientes" name="cliente" placeholder="" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 flex justify-end bg-white dark:bg-darkColor p-4">
              <ButtonPrimary label="Salvar" className=" " onClick={() => {}} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
