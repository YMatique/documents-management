/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ButtonBack from '@renderer/components/Buttons/ButtonBack'
import FileThumbnail from '@renderer/components/FileThumbnail'
import Input from '@renderer/components/Forms/Input'
import RadioGroup from '@renderer/components/Forms/RadioOption'
import Select from '@renderer/components/Forms/Select'
import Textarea from '@renderer/components/Forms/Textarea'
import HeaderPage from '@renderer/components/HeaderPage'
import Modal from '@renderer/components/Modal/Modal'
import PdfViewer from '@renderer/components/PdfViewer'
import { Tabs, TabPane } from '@renderer/components/Tabs'
// import Tab from '@renderer/components/Tab'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CaseEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => setIsModalOpen(false)

  const navigate = useNavigate()
  const categories = [
    { value: 'Família', label: 'Família' },
    { value: 'Lei Civil', label: 'Lei Civil' },
    { value: 'construção', label: 'Lei de Construção' }
  ]
  const [selected, setSelected] = useState<string>('pending')
  const [customers, setCustomers] = useState([
    { value: 'António Vasco', label: 'António Vasco' },
    { value: 'Inalda Cumbane', label: 'Inalda Cumbane' },
    { value: 'Aly Olaia', label: 'Aly Olaia' }
  ])
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="flex flex-col  text-sm h-[calc(100vh-100px)]">
      <HeaderPage className="mb-8">
        <div className="flex">
          <div className="flex w-1/2 flex-col">
            <ButtonBack
              onClick={() => {
                navigate(-1)
              }}
              className=""
            />
            <h4 className="text-lg font-normal">Editar Caso</h4>
            <p className="font-light text-sm"></p>
          </div>
          <div className="flex justify-center items-end mr-3 w-1/2 flex-col">
            {/* <ButtonPrimary label="Cadastrar" className="" onClick={openModal} /> */}
          </div>
        </div>
      </HeaderPage>

      <div className="h-full">
        <div className="overflow-y-auto h-[calc(100%-70px)]">
          <form action="" className=" ">
            <div className="flex flex-wrap ">
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
                    <h4 className="font-medium mb-2">Estado</h4>
                    <RadioGroup
                      name="status"
                      options={[
                        { label: 'Pendente', value: 'pending' },
                        { label: 'Em Andamento', value: 'onway' },
                        { label: 'Arquivado', value: 'archived' }
                      ]}
                      selectedValue={selected}
                      onChange={(value) => setSelected(value)}
                    />
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium  flex justify-between align-middle items-center border-b-gray-300 dark:border-b-gray-700 border border-x-0 border-t-0">
                      <span>Cliente</span>
                    </h4>
                  </div>

                  <div className="mb-4">
                    <Select options={customers} label="Clientes" name="cliente" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 flex justify-end bg-white dark:bg-darkColor p-4">
                {/* <ButtonPrimary label="Salvar" className=" " onClick={() => {}} /> */}
              </div>

              <div className="flex w-full bg-white dark:bg-darkColor p-4 mt-4">
                <Tabs>
                  <TabPane label="Documentos">
                    <p>Documentos do caso</p>

                    {/* <FileThumbnail /> */}
                    <div className="flex flex-wrap justify-normal -ml-4  ">
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                      <PdfViewer file="" />
                    </div>
                  </TabPane>
                  <TabPane label="Actividades">Actividades do caso</TabPane>
                </Tabs>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Modal
        title="Adicionar Actividade"
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
        <p></p>
      </Modal>
    </div>
  )
}

export default CaseEdit
