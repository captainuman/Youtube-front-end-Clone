import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', icon: '/src/images/home.png' },
  { to: '/shorts', label: 'Shorts', icon: '/src/images/shorts.png' },
  { to: '/subscriptions', label: 'Subscriptions', icon: '/src/images/subs.png' },
  { to: '/you', label: 'You', icon: '/src/images/profile.png' },
]

const Navbar = () => {
  return (
    <aside
      className="
        mt-12
        fixed
        bottom-0 left-0
        w-full
        bg-white
        border-t
        flex justify-around
        py-2
        z-2

        lg:top-0 lg:left-0
        lg:h-screen lg:w-20
        lg:flex-col lg:justify-start
        lg:py-4
        lg:border-t-0
      "
    >
      {navItems.map(item => (
        <NavLink
          key={item.label}
          to={item.to}
          className={({ isActive }) =>
            `
            flex flex-col items-center gap-1
            px-2 py-2
            rounded
            hover:bg-gray-200
            ${isActive ? 'bg-gray-200 font-semibold' : ''}
            `
          }
        >
          <img
            src={item.icon}
            alt={item.label}
            className="w-5"
          />
          <span className="text-[11px] lg:text-xs">
            {item.label}
          </span>
        </NavLink>
      ))}
    </aside>
  )
}

export default Navbar
