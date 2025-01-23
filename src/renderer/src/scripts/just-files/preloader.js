const { contextBridge, ipcRenderer } = require('electron')

// Expor funções de IPC para o React
contextBridge.exposeInMainWorld('electron', {
  submitCase: (data) => ipcRenderer.send('submit-case', data)
})
