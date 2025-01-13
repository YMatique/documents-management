import ButtonBack from '@renderer/components/Buttons/ButtonBack'
import ButtonPlus from '@renderer/components/Buttons/ButtonPlus'
import Input from '@renderer/components/Forms/Input'
import Select from '@renderer/components/Forms/Select'
import Textarea from '@renderer/components/Forms/Textarea'
import HeaderPage from '@renderer/components/HeaderPage'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CaseCreate: React.FC = () => {
  const navigate = useNavigate()
  const categories = [
    { value: 'Família', label: 'Família' },
    { value: 'Lei Civil', label: 'Lei Civil' },
    { value: 'construção', label: 'Lei de Construção' }
  ]

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div className="flex flex-col  text-sm h-full">
      <HeaderPage className="mb-8">
        <div className="flex">
          <div className="flex w-1/2 flex-col">
            <ButtonBack
              onClick={() => {
                navigate(-1)
              }}
              className=""
            />
            <h4 className="text-lg font-normal">Cadastrar Casos</h4>
            <p className="font-light text-sm">Preencha todos os campos</p>
          </div>
          <div className="flex justify-center items-end mr-3 w-1/2 flex-col">
            {/* <ButtonPrimary label="Cadastrar" className="" onClick={openModal} /> */}
          </div>
        </div>
      </HeaderPage>

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
                <h4 className="font-semibold flex justify-between align-middle items-center">
                  <span>Cliente</span> <ButtonPlus onClick={() => {}} className="" />{' '}
                </h4>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CaseCreate
