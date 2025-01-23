import { Customer } from '@prisma/client'
import { useEffect, useState } from 'react'

export default function getCustomersHook(): Array<Customer> {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    window.context.getCustomers().then(setCustomers)
  }, [])

  return customers
}
