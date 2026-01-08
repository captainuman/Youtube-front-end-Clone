  import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  import { Link, useParams } from 'react-router-dom'
  import Searchbar from './searchbar'
  import vdata from './data/data.json'

  const Videop = () => {
    const { id } = useParams()

    const [photos, setPhotos] = useState([])
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])

    const selectedVideo = vdata.find(v => v.id === Number(id)) || vdata[0]

    useEffect(() => {
      async function fetchVideos() {
        const res = await axios.get(
          'https://picsum.photos/v2/list?page=1&limit=15'
        )
        setPhotos(res.data)
      }
      fetchVideos()
    }, [])

    function handleSubmit(e) {
      e.preventDefault()
      if (!comment.trim()) return
      setComments([...comments, comment])
      setComment('')
    }

    return (
     <div className="flex flex-col">
  <Searchbar />

  {/* VIDEO + AD */}
  <div
    className="
      mt-20
      px-4 sm:px-6 lg:px-16
      flex flex-col lg:flex-row
      gap-6 lg:gap-10
    "
  >
    <video
      key={selectedVideo.src}
      className="
        w-full
        lg:w-[70%]
        aspect-video
        rounded-2xl
      "
      src={selectedVideo.src}
      controls
    />

    <div
      className="
        hidden lg:flex
        border-2
        w-[30%]
        rounded-2xl
        items-center
        justify-center
        text-center
      "
    >
      ADVERTISEMENT
    </div>
  </div>

  {/* DETAILS + SIDEBAR */}
  <div
    className="
      flex
      flex-col lg:flex-row
      px-4 sm:px-6 lg:px-16
      gap-8
    "
  >
    {/* LEFT CONTENT */}
    <div className="w-full lg:w-[70%]">
      <p className="text-xl sm:text-2xl lg:text-3xl mt-5">
        {selectedVideo.title}
      </p>

      <div className="mt-5 bg-gray-200 rounded-2xl p-4">
        {selectedVideo.des}
      </div>

      <div className="mt-5 bg-gray-200 rounded-2xl p-4 h-full">
        <p className="text-xl sm:text-2xl font-bold mb-3">
          Comments
        </p>

        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            className="border w-full rounded-2xl h-20 p-2"
            placeholder="Enter your comment"
          />
          <button className="bg-red-500 px-5 py-2 mt-2 rounded-full text-white">
            Submit
          </button>
        </form>

        {comments.length === 0 ? (
          <p className="mt-3 text-gray-500">No comments</p>
        ) : (
          comments.map((c, i) => (
            <p key={i} className="mt-2 bg-white p-2 rounded">
              {c}
            </p>
          ))
        )}
      </div>
    </div>

    {/* RIGHT SIDEBAR VIDEOS */}
    <div
      className="
        w-full lg:w-[30%]
        flex flex-col
        gap-4
        mt-19
      "
    >
      {vdata.map(photo => (
        <Link key={photo.id} to={`/video/${photo.id}`}>
          <video
            className="
              w-full
              aspect-video
              rounded-xl
            "
            src={photo.src}
          />
          <p className="text-center text-sm mt-1">
            {photo.title}
          </p>
        </Link>
      ))}
    </div>
  </div>
</div>

           
    )
  }

  export default Videop
