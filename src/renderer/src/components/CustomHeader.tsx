// const { ipcRenderer } = window.require('electron'); // Importa IPC para comunicação com o processo principal

function CustomHeader(): JSX.Element {
  // const handleMinimize = () => ipcRenderer.send('window:minimize');
  // const handleMaximize = () => ipcRenderer.send('window:maximize');
  // const handleClose = () => ipcRenderer.send('window:close');

  return (
    <header className="absolute inset-0 h-8 bg-transparent">
      <div className="flex items-end  justify-end bg-transparent text-white p-2">
        <div className="flex space-x-2">
          <button className="w-4 h-4 bg-green-600 rounded-full"></button>
          <button className="w-4 h-4 bg-yellow-400 rounded-full"></button>
          <button className="w-4 h-4 bg-red-600 hover:bg-red-500 rounded-full text-sm"></button>
        </div>
      </div>
    </header>
  )
}

export default CustomHeader
