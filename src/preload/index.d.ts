import { ElectronAPI } from '@electron-toolkit/preload'

export interface BtnFunction {
  minimizeApp: () => void
  maximizeApp: () => void
  closeApp: () => void
}
declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    btnFunction: BtnFunction
  }
}
