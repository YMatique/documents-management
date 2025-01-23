const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('path')
const fs = require('fs')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js') // Se você for usar preload.js
    }
  })

  mainWindow.loadURL('http://localhost:3000') // Caso esteja usando React no localhost
}

// Processar dados recebidos do frontend
ipcMain.on('submit-case', (event, data) => {
  const { title, description, documents } = data

  const caseDirectory = path.join(app.getPath('documents'), title)

  // Criar diretório para o caso
  if (!fs.existsSync(caseDirectory)) {
    fs.mkdirSync(caseDirectory)
  }

  const documentPaths = []

  // Salvar cada documento no diretório do caso
  documents.forEach((file) => {
    const filePath = path.join(caseDirectory, file.name)
    fs.writeFileSync(filePath, fs.readFileSync(file.path))
    documentPaths.push(filePath)
  })

  // Exibir uma caixa de mensagem para confirmação
  dialog.showMessageBox({
    type: 'info',
    message: 'Caso criado e documentos salvos com sucesso!',
    buttons: ['OK']
  })
})

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
