import { Category } from '@prisma/client'
import { useEffect, useState } from 'react'

export default function getCategoriesHook(): Array<Category> {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    window.context.getCategory().then(setCategories)
  }, [])

  return categories
}
