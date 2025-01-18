/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PrismaClient, Status } from '@prisma/client'

const prisma = new PrismaClient()

// Funções CRUD para o modelo User

// Criar um novo usuário
const createUser = async (name: string, email: string, password: string) => {
  return await prisma.user.create({
    data: {
      name,
      email,
      password
    }
  })
}

// Obter todos os usuários
const getUsers = async () => {
  return await prisma.user.findMany({
    where: {
      deletedAt: null // Exclui os usuários deletados
    }
  })
}

// Atualizar um usuário
const updateUser = async (id: number, name: string, email: string) => {
  return await prisma.user.update({
    where: { id },
    data: {
      name,
      email
    }
  })
}

// Excluir um usuário (soft delete)
const deleteUser = async (id: number) => {
  return await prisma.user.update({
    where: { id },
    data: { deletedAt: new Date() } // Marca como deletado
  })
}

// Funções CRUD para o modelo Category

// Criar uma nova categoria
const createCategory = async (name: string, description: string) => {
  return await prisma.category.create({
    data: {
      name,
      description
    }
  })
}

// Obter todas as categorias
const getCategories = async () => {
  return await prisma.category.findMany({})
}

// Atualizar uma categoria
const updateCategory = async (id: number, name: string, description: string) => {
  return await prisma.category.update({
    where: { id },
    data: {
      name,
      description
    }
  })
}

// Excluir uma categoria (soft delete)
const deleteCategory = async (id: number) => {
  return await prisma.category.delete({
    where: { id }
  })
}

// Funções CRUD para o modelo Customer

// Criar um novo cliente
const createCustomer = async (name: string, email: string, phone: string, address: string) => {
  return await prisma.customer.create({
    data: {
      name,
      email,
      phone,
      address
    }
  })
}

// Obter todos os clientes
const getCustomers = async () => {
  return await prisma.customer.findMany({
    where: {
      deletedAt: null // Exclui clientes deletados
    }
  })
}

// Atualizar um cliente
const updateCustomer = async (id: number, name: string, email: string) => {
  return await prisma.customer.update({
    where: { id },
    data: {
      name,
      email
    }
  })
}

// Excluir um cliente (soft delete)
const deleteCustomer = async (id: number) => {
  return await prisma.customer.update({
    where: { id },
    data: { deletedAt: new Date() } // Marca como deletado
  })
}

// Funções CRUD para o modelo Case

// Criar um novo caso
const createCase = async (
  title: string,
  description: string,
  status: Status,
  categoryId: number,
  userId: number,
  customerId: number
) => {
  return await prisma.cases.create({
    data: {
      title,
      description,
      status,
      categoryId,
      userId,
      customerId
    }
  })
}

// Obter todos os casos
const getCases = async () => {
  return await prisma.cases.findMany({
    where: {
      deletedAt: null // Exclui casos deletados
    }
  })
}

// Atualizar um caso
const updateCase = async (id: number, title: string, description: string) => {
  return await prisma.cases.update({
    where: { id },
    data: {
      title,
      description
    }
  })
}

// Excluir um caso (soft delete)
const deleteCase = async (id: number) => {
  return await prisma.cases.update({
    where: { id },
    data: { deletedAt: new Date() } // Marca como deletado
  })
}

// Funções CRUD para o modelo Document

// Criar um novo documento
const createDocument = async (name: string, path: string, caseId: number) => {
  return await prisma.document.create({
    data: {
      name,
      path,
      caseId
    }
  })
}

// Obter todos os documentos
const getDocuments = async () => {
  return await prisma.document.findMany({
    where: {
      deletedAt: null // Exclui documentos deletados
    }
  })
}

// Atualizar um documento
const updateDocument = async (id: string, name: string, path: string) => {
  return await prisma.document.update({
    where: { id },
    data: {
      name,
      path
    }
  })
}

// Excluir um documento (soft delete)
const deleteDocument = async (id: string) => {
  return await prisma.document.update({
    where: { id },
    data: { deletedAt: new Date() } // Marca como deletado
  })
}

export {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
  createCase,
  getCases,
  updateCase,
  deleteCase,
  createDocument,
  getDocuments,
  updateDocument,
  deleteDocument
}
