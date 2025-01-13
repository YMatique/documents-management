// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
// import Button from './components/Button'

import { MainContent, RootLayout } from './components/AppLayout'
import SideBar from './components/Sidebar'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import CustomHeader from './components/CustomHeader'
import { NavLink } from 'react-router-dom'
import { FaHouse } from 'react-icons/fa6'
import { FaTags } from 'react-icons/fa6'
import { FaRegFileLines } from 'react-icons/fa6'
import { FaRegFolder } from 'react-icons/fa6'
import { FaUserTie } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa6'
import { FaGears } from 'react-icons/fa6'
import Cases from './pages/Cases'
import Users from './pages/Users'
import CaseCreate from './pages/CaseCreate'
import Customers from './pages/Customers'
import CaseEdit from './pages/CaseEdit'
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
              <h4 className="text-gray-300 text-base ">Document Management</h4>
              <h4 className="text-primary text-base  italic">Free Lawyer</h4>
            </div>
            <ul className="space-y-0  text-sm mt-4 text-gray-300">
              <li className="flex">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'cursor-default w-full flex items-center text-primary bg-[#1f232c] p-3 pl-4 border border-r-0 border-t-0 border-b-0 border-l-primary border-l-2'
                      : ' cursor-default w-full flex hover:bg-[#1f232c] p-3 pl-4 '
                  }
                >
                  <FaHouse className="mr-4 text-lg" />
                  Dashboard
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  to="/cases"
                  className={({ isActive }) =>
                    isActive
                      ? 'cursor-default w-full flex text-primary bg-[#1f232c] p-3 pl-4 border border-r-0 border-t-0 border-b-0 border-l-primary border-l-2'
                      : ' cursor-default w-full flex hover:bg-[#1f232c] p-3 pl-4 '
                  }
                >
                  <FaRegFolder className="mr-4 text-lg" />
                  Casos
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  to="/category"
                  className={({ isActive }) =>
                    isActive
                      ? 'cursor-default w-full flex text-primary itens-center bg-[#1f232c] p-3 pl-4 border border-r-0 border-t-0 border-b-0 border-l-primary border-l-2'
                      : ' cursor-default w-full flex itens-center hover:bg-[#1f232c] p-3 pl-4 '
                  }
                >
                  <FaTags className="mr-4 text-lg" />
                  Categoria
                </NavLink>
              </li>
              <li className=" flex">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'cursor-default w-full flex text-primary bg-[#1f232c] p-3  pl-4 border border-r-0 border-t-0 border-b-0 border-l-primary border-l-2'
                      : ' cursor-default w-full flex hover:bg-[#1f232c] p-3 pl-4 '
                  }
                >
                  <FaRegFileLines className="mr-4 text-lg" />
                  Documentos
                </NavLink>
              </li>
              <li className="flex ">
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    isActive
                      ? 'cursor-default w-full flex text-primary bg-[#1f232c] p-3 pl-4 border border-r-0 border-t-0 border-b-0 border-l-primary border-l-2'
                      : ' cursor-default w-full flex hover:bg-[#1f232c] p-3 pl-4 '
                  }
                >
                  <FaUserTie className="mr-4 text-lg" />
                  Advogados
                </NavLink>
              </li>
              <li className=" flex ">
                <NavLink
                  to="/customers"
                  className={({ isActive }) =>
                    isActive
                      ? 'cursor-default w-full flex text-primary bg-[#1f232c] p-3 pl-4 border border-r-0 border-t-0 border-b-0 border-l-primary border-l-2'
                      : ' cursor-default w-full flex hover:bg-[#1f232c] p-3 pl-4 '
                  }
                >
                  <FaUsers className="mr-4 text-lg" />
                  Clientes
                </NavLink>
              </li>
              <li className="flex ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'cursor-default w-full flex text-primary bg-[#1f232c] p-3 pl-4 border border-r-0 border-t-0 border-b-0 border-l-primary border-l-2'
                      : ' cursor-default w-full flex hover:bg-[#1f232c] p-3 pl-4 '
                  }
                >
                  <FaGears className="mr-4 text-lg" />
                  Configuração
                </NavLink>
              </li>
            </ul>
          </nav>
        </SideBar>
        <MainContent className="pl-4 ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases/create" element={<CaseCreate />} />
            <Route path="/cases/edit/:id" element={<CaseEdit />} />
            <Route path="/users" element={<Users />} />
            <Route path="/customers" element={<Customers />} />
            {/* <Route path="/settings" element={<Settings />} /> */}
            {/* <Route path="/notifications" element={<Notifications />} /> */}
            {/* <Route path="/help" element={<Help />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/docs" element={<Docs />} /> */}
          </Routes>
        </MainContent>
      </Router>
    </RootLayout>
  )
}
export default App
