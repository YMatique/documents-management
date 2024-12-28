// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
// import Button from './components/Button'

import { MainContent, RootLayout } from './components/AppLayout'
import SideBar from './components/Sidebar'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import CustomHeader from './components/CustomHeader'
import { NavLink } from 'react-router-dom'

// function App(): JSX.Element {
//   const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

//   return (
//     <>
//       <img alt="logo" className="logo" src={electronLogo} />
//       <div className="creator">Powered by electron-vite</div>
//       <div className="text">
//         Build an Electron app with <span className="react">React</span>
//         &nbsp;and <span className="ts">TypeScript</span>
//       </div>
//       <p className="tip">
//         Please try pressing <code>F12</code> to open the devTool
//       </p>
//       <div className="actions">
//         <div className="action">
//           <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
//             Documentation
//           </a>
//         </div>
//         <div className="action">
//           <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
//             Send IPC
//           </a>
//         </div>
//       </div>
//       <div className="bg-white h-8 w-full text-gray-950" id="txt">
//         bjkgkj
//       </div>
//       <Button
//         className=""
//         label="Clique aqui"
//         onClick={() => {
//           const txt = document.getElementById('txt')!
//           txt.innerText = 'Clicou aqui'
//         }}
//       ></Button>
//       {/* <Versions></Versions> */}
//     </>
//   )
// }

function App(): JSX.Element {
  return (
    <RootLayout className="">
      <Router>
        <CustomHeader />
        <SideBar>
          <nav className="flex-1">
            <div className="p-4">
              <h4 className="text-gray-300 text-lg font-medium">Document Management</h4>
              <h4 className="text-primary text-lg  italic">Free Lawyer</h4>
            </div>
            <ul className="space-y-0 font text-l mt-4 text-gray-300">
              <li className="active:text-primary cursor-default bg-[#1f232c] p-3 pl-4 border border-r-0 border-t-0 border-b-0 border-l-primary border-l-2">
                <Link to="/" className="w-full cursor-default">
                  Dashboard
                </Link>
              </li>
              <li className=" cursor-default hover:bg-[#1f232c] p-3 pl-4 ">
                <Link to="/" className="w-full cursor-default">
                  Casos
                </Link>
              </li>
              <li className=" cursor-default hover:bg-[#1f232c] p-3 pl-4 ">
                <NavLink to="/category" className="({isActive}) w-full cursor-default">
                  Categoria
                </NavLink>
              </li>
              <li className=" cursor-default hover:bg-[#1f232c] p-3 pl-4 ">
                <Link to="/" className="w-full cursor-default">
                  Documentos
                </Link>
              </li>
              <li className=" cursor-default hover:bg-[#1f232c] p-3 pl-4 ">
                <Link to="/" className="w-full cursor-default">
                  Advogados
                </Link>
              </li>
              <li className=" cursor-default hover:bg-[#1f232c] p-3 pl-4 ">
                <Link to="/" className="w-full cursor-default">
                  Clientes
                </Link>
              </li>
              <li className=" cursor-default hover:bg-[#1f232c] p-3 pl-4 ">
                <Link to="/" className="w-full cursor-default">
                  Configuração
                </Link>
              </li>
              {/* <li className="hover:bg-[#111318]">
                <Link to="/about" className="">
                  Casos
                </Link>
              </li> */}
            </ul>
          </nav>
        </SideBar>
        <MainContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </MainContent>
      </Router>
    </RootLayout>
  )
}
export default App
