import { PrismaClient, Role, User } from '@prisma/client'

// import prisma from "./db";

// async function createUser(): Promise<User> {
//   const user = await prisma.user.create({
//     data: {
//       name: "Advogado Exemplo",
//       email: "advogado@email.com",
//       password: "senha123",
//     },
//   });
// //   console.log(user);
// }

// createUser();
const prisma = new PrismaClient()
export class UserModel {
  async get(): Promise<User[]> {
    const user = await prisma.user.findMany({ where: { deletedAt: null } })
    return user
  }
  async delete(id: number): Promise<boolean> {
    try {
      await prisma.user.update({ where: { id }, data: { deletedAt: new Date().toISOString() } })
      return true
    } catch (err) {
      console.error(err)

      return false
    }
  }
  async update(user: User): Promise<User> {
    return await prisma.user.update({ where: { id: user.id }, data: user })
  }
  static async create(name: string, email: string, role: Role, password: string): Promise<User> {
    return await prisma.user.create({
      data: {
        email: email,
        role: role,
        name: name,
        password: password
      }
    })
  }
}
