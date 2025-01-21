import { Role } from '@prisma/client'
// export enum UserRole {
//   Administrador = Role.ADMIN,
//   Advogado = Role.LAWYER
// }
interface UserRoleInterface {
  role: Role
  label: string
}
export const UserRole: Array<UserRoleInterface> = [
  { role: Role.ADMIN, label: 'Administrador' },
  { role: Role.LAWYER, label: 'Advogado' }
]
