// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
// import Button from './components/Button'

import { MainContent, RootLayout } from './components/AppLayout'
// import CustomHeader from './components/CustomHeader'
import SideBar from './components/Sidebar'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'

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
    <RootLayout>
      <Router>
        <SideBar>
          <nav className="flex-1">
            <h4 className="text-primary text-lg font-semibold p-4">Doc Manag</h4>
            <ul className="space-y-2 p-4 mt-4 text-gray-400">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About=</Link>
              </li>
            </ul>
          </nav>
        </SideBar>
        <MainContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<Category />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </MainContent>
      </Router>
    </RootLayout>
  )
}
export default App
