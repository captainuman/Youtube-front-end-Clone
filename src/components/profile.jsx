import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Searchbar from './searchbar'

/* ---------- REUSABLE SECTION ---------- */

const Section = ({ title, photos, onLeft, onRight }) => {
  return (
    <div className="w-full overflow-hidden mb-5">
      <div className="flex justify-between px-5 lg:px-5 items-center">
        <h1 className="font-semibold text-xl sm:text-2xl p-2">
          {title}
        </h1>

        <div className="flex gap-2 items-center font-semibold">
          <button className="border px-2 py-1 rounded-full text-sm">
            View all
          </button>
          <button
            onClick={onLeft}
            className="border rounded-full px-3 py-1"
          >
            ‹
          </button>
          <button
            onClick={onRight}
            className="border rounded-full px-3 py-1"
          >
            ›
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto p-2 justify-center">
        {photos.map((ele, idx) => (
          <Link
            key={ele.id}
            to="/video"
            className={`
              min-w-[320px]
              shrink-0
              ${idx > 0 ? 'hidden sm:block' : 'block'}
            `}
          >
            <img
              className="w-full h-44 sm:h-60 rounded-xl object-cover"
              src={ele.download_url}
              alt={ele.author}
            />
            <h1 className="text-center mt-1 text-sm sm:text-base">
              {ele.author}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

/* ---------- PROFILE PAGE ---------- */

const Profile = () => {
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=3`
      )
      setPhotos(res.data)
    }

    fetchPhotos()
  }, [page])

  return (
    <div className="flex min-h-screen">
      <Searchbar />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <div className="flex-1 mt-20 px-4 sm:px-6 lg:ml-20 pb-24">
        {/* PROFILE HEADER */}
        <div className="flex gap-4 items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-700 flex items-center justify-center text-white text-4xl">
            R
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Rahib Afnan
            </h1>
            <p className="text-gray-500 text-sm">
              Create a channel
            </p>

            <div className="flex gap-2 mt-2">
              <button className="bg-gray-200 px-3 py-1 text-sm rounded-full font-semibold">
                Switch account
              </button>
              <button className="bg-gray-200 px-3 py-1 text-sm rounded-full font-semibold">
                Google Account
              </button>
            </div>
          </div>
        </div>

        {/* SECTIONS */}
        <Section
          title="History"
          photos={photos}
          onLeft={() => setPage(p => Math.max(1, p - 1))}
          onRight={() => setPage(p => p + 1)}
        />

        <Section
          title="Playlist"
          photos={photos}
          onLeft={() => setPage(p => Math.max(1, p - 1))}
          onRight={() => setPage(p => p + 1)}
        />

        <Section
          title="Watch List"
          photos={photos}
          onLeft={() => setPage(p => Math.max(1, p - 1))}
          onRight={() => setPage(p => p + 1)}
        />

        <Section
          title="Liked Videos"
          photos={photos}
          onLeft={() => setPage(p => Math.max(1, p - 1))}
          onRight={() => setPage(p => p + 1)}
        />
      </div>
    </div>
  )
}

export default Profile
