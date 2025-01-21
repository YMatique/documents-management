// import { ElectronAPI } from '@electron-toolkit/preload'
import { User } from '@prisma/client'
export interface BtnFunction {
  minimizeApp: () => void
  maximizeApp: () => void
  closeApp: () => void
}
declare global {
  interface Window {
    // electron: ElectronAPI
    // api: unknown
    // btnFunction: BtnFunction
    context: {
      ping: string
      minimizeApp: () => void
      maximizeApp: () => void
      closeApp: () => void
      executeQuery: () => void
      getUsers: () => Promise<User[]>
      deleteUser: (number) => Promise<boolean>
      createUser: (args: {
        name: string
        email: string
        role: Role
        password: string
      }) => Promise<User>
    }
  }
}
