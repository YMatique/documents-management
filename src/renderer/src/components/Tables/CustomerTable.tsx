import ButtonDelete from '../Buttons/ButtonDelete'
import ButtonEdit from '../Buttons/ButtonEdit'

interface Customer {
  id: number
  name: string
  email: string
  phone: string
  address: string
}

interface CustomerTableProps {
  data: Customer[]
  onDelete: (id: number) => void
  onEdit: (customer: Customer) => void
}
// eslint-disable-next-line react/prop-types
const CustomerTable: React.FC<CustomerTableProps> = ({ data, onDelete, onEdit }) => {
  return (
    <div className="-m-1.5 overflow-x-auto overflow-y-auto h-[calc(100%-150px)]">
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
                    Celular
                  </th>
                  <th scope="col" className="px-1 py-3 text-start text-xs font-medium ">
                    Endereço
                  </th>
                  <th scope="col" className="px-1 py-3 text-start w-8 text-xs font-medium ">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="border-b border-b-gray-50">
                {/* eslint-disable-next-line react/prop-types */}
                {data.map((customer) => (
                  <tr key={customer.id} className="hover:bg-slate-100 dark:hover:bg-[#1f232c]">
                    <td className="px-1 py-4 whitespace-nowrap text-sm font-base text-gray-800 dark:text-gray-300">
                      {customer.name}
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {customer.email}
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {customer.phone}
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {customer.address}
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap text-end text-sm font-medium">
                      {/* <ButtonDetails className="" onClick={() => {}} /> */}
                      <ButtonEdit className="" onClick={() => onEdit(customer)} />
                      <ButtonDelete className="" onClick={() => onDelete(customer.id)} />
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

export default CustomerTable
