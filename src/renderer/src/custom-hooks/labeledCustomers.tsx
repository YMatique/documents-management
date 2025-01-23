import { useEffect, useState } from 'react'
import getCustomersHook from './getCustomers'

export default function labeledCustomersHook(): Array<{ label: string; value: string }> {
  const [customers, setCustomers] = useState<{ label: string; value: string }[]>([])
  const _constumers = getCustomersHook()

  useEffect(() => {
    const auxCostumer: { label: string; value: string }[] = []
    _constumers.forEach((customer) => {
      auxCostumer.push({ label: customer.name, value: customer.id.toString() })
    })
    setCustomers(auxCostumer)
  }, [])

  // console.log(customers)

  return customers
}
