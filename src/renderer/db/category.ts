import { PrismaClient, Category } from '@prisma/client'

const prisma = new PrismaClient()

export class CategoryModel {
  static async get(): Promise<Category[]> {
    const category = await prisma.category.findMany()
    return category
  }
  static async update(data: { id: number; name: string; description: string }): Promise<Category> {
    const category = await prisma.category.update({
      where: { id: data.id },
      data: { name: data.name, description: data.description }
    })
    return category
  }

  static async delete(id: number): Promise<boolean> {
    try {
      //   await prisma.category.update({ where: { id }, data: { deletedAt: new Date().toISOString() } })
      await prisma.category.delete({ where: { id } })
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  static async create(data: { id: number; name: string; description: string }): Promise<Category> {
    return prisma.category.create({ data: { name: data.name, description: data.description } })
  }
}
