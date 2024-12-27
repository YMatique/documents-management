function SideBar(): JSX.Element {
  return (
    <>
      <aside className="w-64 h-full bg-[#1b1b1f] text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#21ca78]">Menu</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Users
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default SideBar
