import ButtonDelete from '../Buttons/ButtonDelete'
// import ButtonDetails from '../Buttons/ButtonDetails'
import ButtonEdit from '../Buttons/ButtonEdit'

interface Category {
  id: number
  name: string
  description: string
}
interface CategoryTambleProps {
  data: Category[]
  onEdit: (category: Category) => void
  onDelete: (category: Category) => void
}
// eslint-disable-next-line react/prop-types
const CategoryTable: React.FC<CategoryTambleProps> = ({ data, onEdit, onDelete }) => {
  return (
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className=" divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className=" uppercase">
                <tr>
                  <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                    Categoria
                  </th>
                  <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                    Descrição
                  </th>
                  <th scope="col" className="px-1 py-3 text-start w-8 text-xs font-medium ">
                    Operação
                  </th>
                </tr>
              </thead>
              <tbody className="border-b border-b-gray-50">
                {/* eslint-disable-next-line react/prop-types */}
                {data.map((category) => (
                  <tr key={category.id} className="hover:bg-slate-100 dark:hover:bg-[#1f232c]">
                    <td className="px-1 py-4 whitespace-nowrap text-sm font-base text-gray-800 dark:text-gray-300">
                      {category.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {category.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      {/* <ButtonDetails className="" onClick={() => {}} /> */}
                      <ButtonEdit className="" onClick={() => onEdit(category)}></ButtonEdit>
                      <ButtonDelete className="" onClick={() => onDelete(category)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryTable
