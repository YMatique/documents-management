import { UserRole } from '../../../types/Role'
import ButtonDelete from '../Buttons/ButtonDelete'
// import ButtonDetails from '../Buttons/ButtonDetails'
import ButtonEdit from '../Buttons/ButtonEdit'
import { User } from '@prisma/client'
// impor {UserRole}

interface CategoryTambleProps {
  data: User[]
  onEdit: (user: User) => void
  onDelete: (id: number) => void
}
// eslint-disable-next-line react/prop-types
const UserTable: React.FC<CategoryTambleProps> = ({ data, onEdit, onDelete }) => {
  return (
    <div className="-m-1.5 overflow-x-auto overflow-y-auto h-[calc(100vh-150px)]">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className=" divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-400 dark:divide-neutral-700">
              <thead className=" uppercase">
                <tr>
                  <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                    Nome
                  </th>
                  <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                    Email
                  </th>
                  <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                    Papel
                  </th>
                  <th scope="col" className="px-1 py-3 text-start w-8 text-xs font-medium ">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="border-b border-b-gray-50">
                {/* eslint-disable-next-line react/prop-types */}
                {data.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-100 dark:hover:bg-[#1f232c]">
                    <td className="px-1 py-4 whitespace-nowrap text-sm font-base text-gray-800 dark:text-gray-300">
                      {user.name}
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {user.email}
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {UserRole.map((role) => (role.value == user.role ? role.label : ''))}
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap text-end text-sm font-medium">
                      {/* <ButtonDetails className="" onClick={() => {}} /> */}
                      <ButtonEdit className="" onClick={() => onEdit(user)} />
                      <ButtonDelete className="" onClick={() => onDelete(user.id)} />
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

export default UserTable
