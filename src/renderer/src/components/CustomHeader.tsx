// const { ipcRenderer } = window.require('electron') // Importa IPC para comunicação com o processo principal

function CustomHeader(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type

  // const handleMaximize = () => ipcRenderer.send('window:maximize');
  // const handleClose = () => ipcRenderer.send('window:close');
  // const ipcHandle = async (): void => window.electron.ipcRenderer.invoke('ping')
  return (
    <header className="absolute inset-0 h-8 bg-transparent">
      <div className="flex items-end  justify-end bg-transparent text-white p-2">
        <div className="flex space-x-2">
          <button
            className="w-4 h-4 bg-green-600 rounded-full"
            onClick={async () => {
              // await insertUpdateDeleteData()
              // await window.context.executeQuery()
              await window.context.minimizeApp()
            }}
          ></button>
          <button
            className="w-4 h-4 bg-yellow-400 rounded-full"
            onClick={async () => {
              await window.context.maximizeApp()
            }}
          ></button>
          <button
            className="w-4 h-4 bg-red-600 hover:bg-red-500 rounded-full text-sm"
            onClick={async () => {
              await window.context.closeApp()
            }}
          ></button>
        </div>
      </div>
    </header>
  )
}

export default CustomHeader
