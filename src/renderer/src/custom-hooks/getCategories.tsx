import { Category } from '@prisma/client'
import { useEffect, useState } from 'react'

function getCategoriesHook(): Array<Category> {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    window.context.getCategory().then(setCategories)
  }, [])

  return categories
}
export default getCategoriesHook
