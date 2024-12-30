import React, { useState } from 'react'
import HeaderPage from '@renderer/components/HeaderPage'
import ButtonPrimary from '@renderer/components/Buttons/ButtonPrimary'
import ButtonDelete from '@renderer/components/Buttons/ButtonDelete'
import ButtonEdit from '@renderer/components/Buttons/ButtonEdit'
import Modal from '@renderer/components/Modal/Modal'
import ButtonDetails from '@renderer/components/Buttons/ButtonDetails'
import Dropdown from '@renderer/components/Dropdown'
const Cases: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openModal = () => setIsModalOpen(true)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const closeModal = () => setIsModalOpen(false)
  const dropdownItems = [
    {
      label: 'Newsletter',
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      onClick: () => {
        alert('Clicou em Newsletter!')
      }
    },
    {
      label: 'Purchases',
      href: '/purchases' // Redireciona para essa página
    },
    {
      label: 'Downloads',
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      onClick: () => console.log('Iniciando download...')
    },
    {
      label: 'Team Account',
      href: '/team-account' // Redireciona para essa página
    }
  ]
  return (
    <div className="flex flex-col text-gray-300 text-sm">
      <HeaderPage className="mb-8">
        <div className="flex">
          <div className="flex w-1/2 flex-col">
            <h4 className="text-lg font-normal">Casos</h4>
            <p className="font-light text-sm">Todos os Casos</p>
          </div>
          <div className="flex justify-center items-end mr-3 w-1/2 flex-col">
            <ButtonPrimary label="Cadastrar" className="" onClick={openModal} />
          </div>
        </div>
      </HeaderPage>
      <div className="flex flex-col">
        <Dropdown label="Actions" items={dropdownItems} />
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className=" divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className=" text-gray-300 uppercase dark:text-gray-300">
                    <tr>
                      <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                        Título
                      </th>
                      <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                        Estado
                      </th>
                      <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                        Actividades
                      </th>
                      <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                        Docs
                      </th>
                      <th scope="col" className="px-1 py-3 text-start w-8 text-xs font-medium ">
                        Operação
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-b border-b-gray-50">
                    <tr className="hover:bg-[#1f232c]">
                      <td className="px-1 py-4 whitespace-nowrap text-sm font-base text-gray-800 dark:text-gray-300">
                        John Brown
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        45
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        New York No. 1 Lake Park
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <ButtonDelete className="" onClick={() => {}} />
                      </td>
                    </tr>

                    <tr className="hover:bg-[#1f232c]">
                      <td className="px-1 py-4 whitespace-nowrap text-sm font-base text-gray-800 dark:text-gray-300">
                        Jim Green
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        27
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        London No. 1 Lake Park
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <ButtonDelete className="" onClick={() => {}} />
                      </td>
                    </tr>

                    <tr className="hover:bg-[#1f232c]">
                      <td className="px-1 py-4 whitespace-nowrap text-sm font-base text-gray-800 dark:text-gray-300">
                        Joe Black
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        31
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        Sidney No. 1 Lake Park
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <ButtonDelete className="" onClick={() => {}} />
                      </td>
                    </tr>

                    <tr className="hover:bg-[#1f232c]">
                      <td className="px-1 py-4 whitespace-nowrap text-sm font-base text-gray-800 dark:text-gray-300">
                        Edward King
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        16
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        LA No. 1 Lake Park
                      </td>
                      <td className="px-1 py-4 space-x-1 whitespace-nowrap text-end text-sm font-medium">
                        <ButtonDetails className="" onClick={() => {}} />
                        <ButtonEdit className="" onClick={() => {}}></ButtonEdit>
                        <ButtonDelete className="" onClick={() => {}} />
                      </td>
                    </tr>

                    <tr className="hover:bg-[#1f232c]">
                      <td className="px-1 py-4 whitespace-nowrap text-sm font-base text-gray-800 dark:text-gray-300">
                        Jim Red
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        45
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        Melbourne No. 1 Lake Park
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <ButtonDelete className="" onClick={() => {}} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
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
        <p>Este é o conteúdo do modal.</p>
      </Modal>
    </div>
  )
}

export default Cases
