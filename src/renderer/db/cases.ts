import { PrismaClient, Cases, Status } from '@prisma/client'

const prisma = new PrismaClient()

export class CaseModel {
  static async create(data: {
    title: string
    description: string
    status: Status
    categoryId: number
    userId: number
    customerId: number
  }): Promise<Cases> {
    return await prisma.cases.create({ data: data })
  }

  static async get(): Promise<Cases[]> {
    return await prisma.cases.findMany({
      where: { deletedAt: null },
      //   omit: { deletedAt: true },
      include: {
        customer: {
          select: {
            name: true
          }
        },
        _count: {
          select: {
            documents: true
          }
        },
        user: {
          select: {
            name: true
          }
        }
      }
    })
  }
  static async update(data: {
    id: number
    title: string
    description: string
    status: Status
    categoryId: number
    userId: number
    customerId: number
  }): Promise<Cases> {
    return await prisma.cases.update({ data: data, where: { id: data.id } })
  }
  static async delete(id: number): Promise<boolean> {
    try {
      await prisma.cases.update({
        where: { id: id },
        data: { deletedAt: new Date().toISOString() }
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}
