import { Customer } from '@prisma/client'
import { useEffect, useState } from 'react'

function getCustomersHook(): Array<Customer> {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    window.context.getCustomers().then(setCustomers)
  }, [])

  return customers
}

export default getCustomersHook
