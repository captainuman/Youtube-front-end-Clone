import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import datafile from './data/data.json'
import { Data } from './theme'
import Sideoption from './sideoption'

const Searchbar = () => {
  const [search, setSearch] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)
  const [showNotif, setShowNotif] = useState(false)

  const [, setFile] = useContext(Data)

  // set context data ONCE
  useEffect(() => {
    setFile(datafile)
  }, [setFile])


  return (
    <>
<header className="flex justify-between items-center w-full px-3 sm:px-4 py-2 fixed top-0 bg-white z-50">
  
  {/* LEFT */}
  <div className="flex gap-2 sm:gap-3 items-center">
    <img
      onClick={() => setShowSidebar(prev => !prev)}
      className="p-2 rounded-full w-9 sm:w-10 hover:bg-gray-200 cursor-pointer"
      src="/images/options.png"
      alt="menu"
    />

    <Link to="/" className="flex items-center gap-1">
      <img className="w-7 sm:w-8" src="/images/youtube.png" alt="logo" />
      <h1 className="hidden sm:block font-semibold text-lg sm:text-xl">
        YOUTUBE <sup>in</sup>
      </h1>
    </Link>
  </div>

  {/* SEARCH */}
  <div className="hidden md:flex items-center flex-1 justify-center px-4">
    <input
      type="search"
      value={search}
      onChange={e => setSearch(e.target.value)}
      placeholder="Search"
      className="
        border rounded-l-full
        w-full max-w-xl
        px-4 py-1
        text-sm sm:text-base
        outline-none
      "
    />

    <button className="border rounded-r-full w-12 h-9 flex items-center justify-center hover:bg-gray-100">
      <img className="w-5 h-4" src="/src/images/search.png" alt="search" />
    </button>

    <img
      onClick={() => alert('Voice search not implemented')}
      className="w-9 sm:w-10 bg-gray-200 ml-3 p-2 rounded-full cursor-pointer"
      src="/images/mic.png"
      alt="mic"
    />
  </div>

  {/* MOBILE SEARCH ICON */}
  <div className="md:hidden">
    <img
      className="w-9 p-2 rounded-full hover:bg-gray-200 cursor-pointer"
      src="/images/search.png"
      alt="search"
    />
  </div>

  {/* RIGHT */}
  <div className="flex gap-2 sm:gap-3 items-center">
    <Link
      to="/create"
      className="hidden sm:flex items-center gap-2 bg-gray-200 px-4 py-1 rounded-full font-semibold"
    >
      <span className="text-xl">+</span>
      Create
    </Link>

    <img
      onClick={() => setShowNotif(!showNotif)}
      className="w-9 sm:w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer"
      src="/images/notification.png"
      alt="notifications"
    />

    <div className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-full bg-green-500 text-white font-semibold">
      R
    </div>
  </div>
</header>

{showSidebar && (
  <Sideoption closeSidebar={() => setShowSidebar(false)} />
)}

  </>
)
}
export default Searchbar
