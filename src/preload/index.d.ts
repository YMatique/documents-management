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
    }
  }
}
