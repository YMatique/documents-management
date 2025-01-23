import { PrismaClient, Customer } from '@prisma/client'

const prisma = new PrismaClient()

export class CustomerModel {
  static async create(data: {
    name: string
    email: string
    phone: string
    address: string
  }): Promise<Customer> {
    return await prisma.customer.create({ data: data })
  }
  static async update(data: {
    id: number
    name: string
    email: string
    phone: string
    address: string
  }): Promise<Customer> {
    return await prisma.customer.update({ where: { id: data.id }, data: data })
  }

  static async get(): Promise<Customer[]> {
    return await prisma.customer.findMany({ where: { deletedAt: null } })
  }
  static async delete(id: number): Promise<boolean> {
    try {
      await prisma.customer.update({
        where: { id: id },
        data: { deletedAt: new Date().toISOString() }
      })
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }
}
