// import { contextBridge, ipcRenderer } from 'electron'
// import { electronAPI } from '@electron-toolkit/preload'

// // Custom APIs for renderer
// const api = {}
// // contextBridge.exposeInMainWorld('context', {
// //   closeApp: () => ipcRenderer.send('closeApp'),
// //   minimizeApp: () => ipcRenderer.send('minimizeApp'),
// //   maximizeApp: () => ipcRenderer.send('maximizeApp')
// // })
// // Use `contextBridge` APIs to expose Electron APIs to
// // renderer only if context isolation is enabled, otherwise
// // just add to the DOM global.
// if (process.contextIsolated) {
//   try {
//     contextBridge.exposeInMainWorld('electron', electronAPI)
//     contextBridge.exposeInMainWorld('api', api)

//     // contextBridge.exposeInMainWorld('context', {
//     //   closeApp: () => ipcRenderer.send('closeApp'),
//     //   minimizeApp: () => ipcRenderer.send('minimizeApp'),
//     //   maximizeApp: () => ipcRenderer.send('maximizeApp')
//     // })
//   } catch (error) {
//     console.error(error)
//   }
// } else {
//   // @ts-ignore (define in dts)
//   window.electron = electronAPI
//   // @ts-ignore (define in dts)
//   window.api = api
// }

import { Role } from '@prisma/client'
import { contextBridge, ipcRenderer } from 'electron'
if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}
try {
  contextBridge.exposeInMainWorld('context', {
    ping: ipcRenderer.invoke('ping'),
    minimizeApp: () => ipcRenderer.invoke('minimizeApp'),
    maximizeApp: () => ipcRenderer.invoke('maximizeApp'),
    closeApp: () => ipcRenderer.invoke('closeApp'),
    executeQuery: () => ipcRenderer.invoke('executeQuery'),
    getUsers: () => ipcRenderer.invoke('getUsers'),
    deleteUser: (args: number) => ipcRenderer.invoke('deleteUser', args),
    createUser: (args: { name: string; email: string; role: Role; password: string }) =>
      ipcRenderer.invoke('createUser', args)
  })
} catch (error) {
  console.error(error)
}
