// const { ipcRenderer } = window.require('electron'); // Importa IPC para comunicação com o processo principal

function CustomHeader(): JSX.Element {
  // const handleMinimize = () => ipcRenderer.send('window:minimize');
  // const handleMaximize = () => ipcRenderer.send('window:maximize');
  // const handleClose = () => ipcRenderer.send('window:close');

  return (
    <>
      <div className="flex items-center justify-between bg-transparent text-white p-2">
        <div className="text-lg font-semibold">Meu App</div>
        <div className="flex space-x-2">
          <button className="w-4 h-4 bg-gray-600 hover:bg-gray-500 rounded"></button>
          <button className="w-4 h-4 bg-gray-600 hover:bg-gray-500 rounded"></button>
          <button className="w-4 h-4 bg-red-600 hover:bg-red-500 rounded"></button>
        </div>
      </div>
    </>
  )
}

export default CustomHeader
