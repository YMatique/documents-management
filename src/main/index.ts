import { CaseModel } from './../renderer/db/cases'
import { CustomerModel } from './../renderer/db/customers'
import { CategoryModel } from './../renderer/db/category'
import { UserModel } from '../renderer/db/users'
// import { insertUpdateDeleteData } from '../renderer/db/queries_modifiers'
import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { Cases, Role, Status } from '@prisma/client'
// import insertUpdateDeleteData

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 950,
    height: 670,
    minWidth: 950,
    minHeight: 670,
    show: false,
    frame: false,
    vibrancy: 'under-window',
    visualEffectState: 'active',
    transparent: true,
    // trafficLightPosition: { x: 15, y: 15 },
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
      contextIsolation: true
    }
  })

  ipcMain.handle('minimizeApp', () => {
    mainWindow.minimize()
  })
  ipcMain.handle('maximizeApp', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore()
    } else {
      mainWindow.maximize()
    }
  })
  ipcMain.handle('closeApp', () => {
    mainWindow.close()
    // app.quit()
  })
  ipcMain.handle('executeQuery', () => {
    // insertUpdateDeleteData()
  })
  ipcMain.handle('getUsers', () => new UserModel().get())

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
  // mainWindow.webContents.openDevTools()

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  // ipcMain.on('ping', () => console.log('pong'))

  ipcMain.handle('deleteUser', (_, args: number) => new UserModel().delete(args))
  ipcMain.handle(
    'createUser',
    (_, args: { name: string; email: string; role: Role; password: string }) =>
      UserModel.create(args)
  )
  ipcMain.handle(
    'updateUser',
    (_, args: { id: number; name: string; email: string; role: Role; password: string }) =>
      UserModel.update(args)
  )

  ipcMain.handle('createCategory', (_, args: { id: number; name: string; description: string }) =>
    CategoryModel.create(args)
  )
  ipcMain.handle('updateCategory', (_, args: { id: number; name: string; description: string }) =>
    CategoryModel.update(args)
  )
  ipcMain.handle('deleteCategory', (_, args: number) => CategoryModel.delete(args))
  ipcMain.handle('getCategory', () => CategoryModel.get())

  //Customers
  ipcMain.handle('getCustomers', () => CustomerModel.get())
  ipcMain.handle(
    'createCustomer',
    (
      _,
      args: {
        name: string
        email: string
        phone: string
        address: string
      }
    ) => CustomerModel.create(args)
  )
  ipcMain.handle(
    'updateCustomer',
    (_, args: { id: number; name: string; email: string; phone: string; address: string }) =>
      CustomerModel.update(args)
  )
  ipcMain.handle('deleteCustomer', (_, args: number) => CustomerModel.delete(args))
  ipcMain.handle('ping', (): string => {
    return 'Hello'
  })
  // Cases
  ipcMain.handle('getCases', () => CaseModel.get())
  ipcMain.handle(
    'createCase',
    (
      _,
      data: {
        title: string
        description: string
        status: Status
        categoryId: number
        userId: number
        customerId: number
      }
    ) => CaseModel.create(data)
  )
  ipcMain.handle(
    'updateCase',
    (
      _,
      data: {
        id: number
        title: string
        description: string
        status: Status
        categoryId: number
        userId: number
        customerId: number
      }
    ) => CaseModel.update(data)
  )
  ipcMain.handle('deleteCase', (_, id: number) => CaseModel.delete(id))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
