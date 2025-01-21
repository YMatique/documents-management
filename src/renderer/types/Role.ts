import { Role } from '@prisma/client'
interface UserRoleInterface {
  value: Role
  label: string
}
export const UserRole: Array<UserRoleInterface> = [
  { value: Role.ADMIN, label: 'Administrador' },
  { value: Role.LAWYER, label: 'Advogado' }
]
