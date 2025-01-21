import { Role } from '@prisma/client'
// export enum UserRole {
//   Administrador = Role.ADMIN,
//   Advogado = Role.LAWYER
// }
interface UserRoleInterface {
  value: Role
  label: string
}
export const UserRole: Array<UserRoleInterface> = [
  { value: Role.ADMIN, label: 'Administrador' },
  { value: Role.LAWYER, label: 'Advogado' }
]
