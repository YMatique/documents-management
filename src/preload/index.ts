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
      ipcRenderer.invoke('createUser', args),
    updateUser: (args: { id: number; name: string; email: string; role: Role }) =>
      ipcRenderer.invoke('updateUser', args),
    getCategory: () => ipcRenderer.invoke('getCategory'),
    createCategory: (args: { name: string; description: string }) =>
      ipcRenderer.invoke('createCategory', args),
    updateCategory: (args: { id: number; name: string; description: string }) =>
      ipcRenderer.invoke('updateCategory', args),
    deleteCategory: (args: number) => ipcRenderer.invoke('deleteCategory', args),
    // Customers
    createCustomer: (args: { name: string; email: string; phone: string; address: string }) =>
      ipcRenderer.invoke('createCustomer', args),
    updateCustomer: (args: {
      id: number
      name: string
      email: string
      phone: string
      address: string
    }) => ipcRenderer.invoke('updateCustomer', args),
    getCustomers: () => ipcRenderer.invoke('getCustomers'),
    deleteCustomer: (args: number) => ipcRenderer.invoke('deleteCustomer', args)
  })
} catch (error) {
  console.error(error)
}
