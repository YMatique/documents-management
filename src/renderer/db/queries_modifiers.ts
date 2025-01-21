/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PrismaClient, Status, Role } from '@prisma/client'

const prisma = new PrismaClient()

// 1. Inserindo Dados no Modelo `User`
const createUsers = async () => {
  const users = await prisma.user.createMany({
    data: [
      {
        name: 'João Silva',
        email: 'joao.silva@email.com',
        password: 'senha123',
        role: Role.LAWYER
      },
      {
        name: 'Maria Oliveira',
        email: 'maria.oliveira@email.com',
        password: 'senha123',
        role: Role.ADMIN
      },
      {
        name: 'Pedro Santos',
        email: 'pedro.santos@email.com',
        password: 'senha123',
        role: Role.LAWYER
      },
      { name: 'Ana Souza', email: 'ana.souza@email.com', password: 'senha123', role: Role.LAWYER },
      {
        name: 'Carlos Pereira',
        email: 'carlos.pereira@email.com',
        password: 'senha123',
        role: Role.ADMIN
      }
    ]
  })
  console.log('Users inserted:', users)
}

// 2. Inserindo Dados no Modelo `Category`
const createCategories = async () => {
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Criminal', description: 'Categoria de casos criminais' },
      { name: 'Civil', description: 'Categoria de casos civis' },
      { name: 'Trabalhista', description: 'Categoria de casos trabalhistas' },
      { name: 'Familiar', description: 'Categoria de casos familiares' },
      { name: 'Tributário', description: 'Categoria de casos tributários' }
    ]
  })
  console.log('Categories inserted:', categories)
}

// 3. Inserindo Dados no Modelo `Customer`
const createCustomers = async () => {
  const customers = await prisma.customer.createMany({
    data: [
      {
        name: 'Maria Oliveira',
        email: 'maria.oliveira@email.com',
        phone: '123456789',
        address: 'Rua das Flores, 123'
      },
      {
        name: 'João Pereira',
        email: 'joao.pereira@email.com',
        phone: '987654321',
        address: 'Rua das Palmeiras, 456'
      },
      {
        name: 'Carlos Lima',
        email: 'carlos.lima@email.com',
        phone: '564738291',
        address: 'Avenida Brasil, 789'
      },
      {
        name: 'Ana Costa',
        email: 'ana.costa@email.com',
        phone: '112233445',
        address: 'Rua das Acácias, 101'
      },
      {
        name: 'José Santos',
        email: 'jose.santos@email.com',
        phone: '667788990',
        address: 'Rua das Palmeiras, 202'
      }
    ]
  })
  console.log('Customers inserted:', customers)
}

// 4. Inserindo Dados no Modelo `Cases`
const createCases = async () => {
  const cases = await prisma.cases.createMany({
    data: [
      {
        title: 'Caso de Roubo',
        description: 'Roubo de propriedade na área central',
        status: Status.PENDING,
        categoryId: 1,
        userId: 1,
        customerId: 1
      },
      {
        title: 'Caso de Divórcio',
        description: 'Divórcio litigioso envolvendo bens',
        status: Status.RESOLVED,
        categoryId: 4,
        userId: 2,
        customerId: 2
      },
      {
        title: 'Caso Trabalhista',
        description: 'Reclamação trabalhista contra empresa',
        status: Status.PROGRESS,
        categoryId: 3,
        userId: 3,
        customerId: 3
      },
      {
        title: 'Caso Tributário',
        description: 'Defesa em caso de sonegação de impostos',
        status: Status.REJECTED,
        categoryId: 5,
        userId: 4,
        customerId: 4
      },
      {
        title: 'Caso de Herança',
        description: 'Disputa de herança entre familiares',
        status: Status.PENDING,
        categoryId: 4,
        userId: 5,
        customerId: 5
      }
    ]
  })
  console.log('Cases inserted:', cases)
}

// 5. Inserindo Dados no Modelo `Document`
const createDocuments = async () => {
  const documents = await prisma.document.createMany({
    data: [
      { name: 'Documento 1 - Prova de Roubo', path: '/docs/prova1.pdf', caseId: 1 },
      { name: 'Documento 2 - Acordo de Divórcio', path: '/docs/acordo.pdf', caseId: 2 },
      { name: 'Documento 3 - Reclamação Trabalhista', path: '/docs/reclamacao.pdf', caseId: 3 },
      { name: 'Documento 4 - Defesa Tributária', path: '/docs/defesa.pdf', caseId: 4 },
      { name: 'Documento 5 - Testamento de Herança', path: '/docs/testamento.pdf', caseId: 5 }
    ]
  })
  console.log('Documents inserted:', documents)
}

// 6. Atualizando Dados no Modelo `User`
const updateUser = async () => {
  const updatedUser = await prisma.user.update({
    where: { email: 'joao.silva@email.com' },
    data: { name: 'João Silva Atualizado', role: Role.ADMIN }
  })
  console.log('User updated:', updatedUser)
}

// 7. Atualizando Dados no Modelo `Category`
const updateCategory = async () => {
  const updatedCategory = await prisma.category.update({
    where: { name: 'Criminal' },
    data: { description: 'Categoria de crimes contra a propriedade' }
  })
  console.log('Category updated:', updatedCategory)
}

// 8. Atualizando Dados no Modelo `Customer`
const updateCustomer = async () => {
  const updatedCustomer = await prisma.customer.update({
    where: { email: 'maria.oliveira@email.com' },
    data: { phone: '112233456' }
  })
  console.log('Customer updated:', updatedCustomer)
}

// 9. Atualizando Dados no Modelo `Cases`
const updateCase = async () => {
  const updatedCase = await prisma.cases.update({
    where: { id: 1 },
    data: { status: Status.RESOLVED }
  })
  console.log('Case updated:', updatedCase)
}

// 10. Atualizando Dados no Modelo `Document`
const updateDocument = async () => {
  const updatedDocument = await prisma.document.update({
    where: { id: 'some-uuid' }, // Substitua pelo UUID de um documento
    data: { name: 'Documento de Prova Atualizado' }
  })
  console.log('Document updated:', updatedDocument)
}

// 11. Remover um `User`
const deleteUser = async () => {
  const deletedUser = await prisma.user.delete({
    where: { email: 'pedro.santos@email.com' }
  })
  console.log('User deleted:', deletedUser)
}

// 12. Remover uma `Category`
const deleteCategory = async () => {
  const deletedCategory = await prisma.category.delete({
    where: { name: 'Trabalhista' }
  })
  console.log('Category deleted:', deletedCategory)
}

// 13. Remover um `Customer`
const deleteCustomer = async () => {
  const deletedCustomer = await prisma.customer.delete({
    where: { email: 'joao.pereira@email.com' }
  })
  console.log('Customer deleted:', deletedCustomer)
}

// 14. Remover um `Case`
const deleteCase = async () => {
  const deletedCase = await prisma.cases.delete({
    where: { id: 3 }
  })
  console.log('Case deleted:', deletedCase)
}

// 15. Remover um `Document`
const deleteDocument = async () => {
  const deletedDocument = await prisma.document.delete({
    where: { id: 'some-uuid' } // Substitua pelo UUID do documento
  })
  console.log('Document deleted:', deletedDocument)
}

// const insertUpdateDeleteData = async () => {
//   // Inserir Dados
//   await createUsers()
//   await createCategories()
//   await createCustomers()
//   await createCases()
//   await createDocuments()

//   // Atualizar Dados
//   await updateUser()
//   await updateCategory()
//   await updateCustomer()
//   await updateCase()
//   await updateDocument()

//   // Deletar Dados
//   await deleteUser()
//   await deleteCategory()
//   await deleteCustomer()
//   await deleteCase()
//   await deleteDocument()
// }

// insertUpdateDeleteData()
//   .then(() => console.log('Todos os dados foram inseridos, atualizados e removidos com sucesso.'))
//   .catch((error) => console.error('Erro ao inserir, atualizar ou deletar dados:', error))

export const insertUpdateDeleteData = async () => {
  try {
    await createUsers()
    await createCategories()
    await createCustomers()
    await createCases()
    await createDocuments()

    await updateUser()
    await updateCategory()
    await updateCustomer()
    await updateCase()
    await updateDocument()

    await deleteUser()
    await deleteCategory()
    await deleteCustomer()
    await deleteCase()
    await deleteDocument()

    console.log('Todos os dados foram inseridos, atualizados e removidos com sucesso.')
  } catch (error) {
    console.error('Erro ao inserir, atualizar ou deletar dados:', error)
  } finally {
    await prisma.$disconnect()
  }
}
