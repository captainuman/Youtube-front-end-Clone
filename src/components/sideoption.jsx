import { NavLink } from 'react-router-dom'

const Sideoption = ({ closeSidebar }) => {
  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/30 z-30"
        onClick={closeSidebar}
      />

      {/* SIDEBAR */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r z-40">

        <div className="flex gap-3 items-center px-4 h-16">
          <img
            onClick={closeSidebar}
            className="p-2 rounded-full w-10 hover:bg-gray-200 cursor-pointer"
            src="/src/images/options.png"
            alt="close menu"
          />

          <h1 className="font-semibold text-xl">Menu</h1>
        </div>

        <nav className="flex flex-col px-3 py-3 gap-1">
          <NavLink to="/" onClick={closeSidebar}>Home</NavLink>
          <NavLink to="/shorts" onClick={closeSidebar}>Shorts</NavLink>
          <NavLink to="/subscriptions" onClick={closeSidebar}>Subscriptions</NavLink>
        </nav>

      </aside>
    </>
  )
}

export default Sideoption
