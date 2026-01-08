import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Data } from './theme'

const Body = () => {
  const categories = [
    'All', 'Songs', 'Videos', 'Movies', 'Trailer',
    'Salman Khan', 'Bhaijaan', 'TMKOC', 'Big Boss',
    'T-Series', 'Disha Vakani', 'Jethalal',
    'BB Vines', 'Munawar Faruqui', 'Love Songs'
  ]

  const [file] = useContext(Data)
  const { category } = useParams()

  const filteredVideos =
    !category || category === 'All'
      ? file
      : file.filter(video =>
          video.category.toLowerCase() === category.toLowerCase()
        )

  return (
    <div
      className="
        w-screen
        mt-20
        px-4 sm:px-6 lg:px-8
        pb-24 lg:pb-6
        lg:ml-14
        overflow-y-auto
      "
    >
      {/* CATEGORY BAR */}
      <div className="flex gap-1 overflow-x-auto whitespace-nowrap pb-2">
        {categories.map(cat => (
          <Link
            key={cat}
            to={`/category/${cat}`}
            className="
              rounded-xl
              bg-gray-200
              py-1 px-4
              font-semibold
              text-sm
              shrink-0
            "
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* VIDEO GRID */}
      <div
        className="
          grid
          gap-4
          mt-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-3
        "
      >
        {filteredVideos.map(video => (
          <Link
            key={video.id}
            to={`/video/${video.id}`}
            className="block"
          >
            <video
              src={video.src}
              className="w-90 aspect-video rounded-xl"
              muted
              preload="metadata"
            />
            <h1 className="text-center mt-1 text-sm sm:text-base">
              {video.title}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
