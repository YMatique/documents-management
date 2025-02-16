import { Link } from 'react-router-dom'
import ButtonDelete from '../Buttons/ButtonDelete'
import ButtonDetails from '../Buttons/ButtonDetails'
import ButtonEdit from '../Buttons/ButtonEdit'
import { Cases } from '@prisma/client'

interface CaseTableProps {
  data: Cases[]
  // onEdit: (id: number) => void
  onDelete: (id: number) => void
  onView: (id: number) => void
}
// eslint-disable-next-line react/prop-types
const CaseTable: React.FC<CaseTableProps> = ({ data, onView, onDelete }) => {
  // console.log(data)

  return (
    <div className="flex flex-col h-full">
      <div className="flex mb-4">{/* <Dropdown label="Categorias" items={dropdownItems} /> */}</div>
      <div className="-m-1.5 overflow-x-auto overflow-y-auto h-[calc(100%-150px)]">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className=" divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-4   00 dark:divide-neutral-700">
                <thead className=" uppercase ">
                  <tr>
                    <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                      Código
                    </th>
                    <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                      Título
                    </th>
                    <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                      Estado
                    </th>
                    <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                      Cliente
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
                  {/* eslint-disable-next-line react/prop-types */}
                  {data.map((caso) => (
                    <tr key={caso.id} className="hover:bg-slate-100 dark:hover:bg-[#1f232c]">
                      <td className="px-1 py-4 whitespace-nowrap text-sm font-base text-gray-800 dark:text-gray-300">
                        #{caso.id}
                      </td>
                      <td className="px-1 py-4 whitespace-nowrap text-sm font-base text-gray-800 dark:text-gray-300">
                        {caso.title}
                      </td>
                      <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        {caso.status}
                      </td>
                      <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        {caso.customer.name}
                      </td>
                      <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        {caso._count.documents}
                      </td>
                      <td className="px-1 py-4  whitespace-nowrap text-end text-sm font-medium">
                        <ButtonDetails className="" onClick={() => onView(caso.id)} />
                        <Link to={`/cases/edit/${caso.id}`}>
                          <ButtonEdit className="" onClick={() => {}}></ButtonEdit>
                        </Link>
                        <ButtonDelete className="" onClick={() => onDelete(caso.id)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseTable
