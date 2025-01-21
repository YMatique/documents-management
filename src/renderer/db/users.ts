import { PrismaClient, User } from '@prisma/client'

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
    const user = await prisma.user.findMany()
    return user
  }
  async delete(id: number): Promise<void> {
    await prisma.user.update({ where: { id }, data: { deletedAt: Date() } })
  }
  async update(user: User): Promise<User> {
    return await prisma.user.update({ where: { id: user.id }, data: user })
  }
  async create(user: User): Promise<User> {
    return await prisma.user.create({ data: user })
  }
}
