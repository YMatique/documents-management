import { useEffect, useState } from 'react'
import getCategoriesHook from './getCategories'

export default function labeledCategoriesHook(): Array<{ label: string; value: string }> {
  const [categories, setCategories] = useState<{ label: string; value: string }[]>([
    { label: '', value: '' }
  ])
  const _categories = getCategoriesHook()
  useEffect(() => {
    const auxCategory: { label: string; value: string }[] = []
    _categories.forEach((category) => {
      auxCategory.push({ label: category.name, value: category.id.toString() })
    })
    setCategories(auxCategory)
  }, [])

  return categories
}
