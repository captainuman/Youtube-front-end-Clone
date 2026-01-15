import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Searchbar from "./searchbar"
import vdata from "./data/data.json"

const Videop = () => {
  const { id } = useParams()

  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])

  const selectedVideo =
    vdata.find(v => v.id === Number(id)) || vdata[0]

  function handleSubmit(e) {
    e.preventDefault()
    if (!comment.trim()) return

    setComments(prev => [...prev, comment])
    setComment("")
  }

  return (
    <div className="flex flex-col">
      <Searchbar />

      {/* VIDEO + AD */}
      <div className="mt-20 px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row gap-6 lg:gap-10">
        <video
          key={selectedVideo.src}
          className="w-full lg:w-[70%] aspect-video rounded-2xl"
          src={selectedVideo.src}
          controls
        />

        <div className="hidden lg:flex w-[30%] border-2 rounded-2xl items-center justify-center">
          ADVERTISEMENT
        </div>
      </div>

      {/* DETAILS + SIDEBAR */}
      <div className="px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row gap-8 mt-8">
        {/* LEFT */}
        <div className="w-full lg:w-[70%]">
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            {selectedVideo.title}
          </p>

          <div className="mt-4 bg-gray-200 rounded-2xl p-4">
            {selectedVideo.des}
          </div>

          {/* COMMENTS */}
          <div className="mt-6 bg-gray-200 rounded-2xl p-4">
            <p className="text-xl font-bold mb-3">Comments</p>

            <form onSubmit={handleSubmit}>
              <textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                className="w-full h-20 border rounded-2xl p-2"
                placeholder="Enter your comment"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-5 py-2 mt-2 rounded-full"
              >
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

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4">
          {vdata.map(video => (
            <Link key={video.id} to={`/video/${video.id}`}>
              <video
                className="w-full aspect-video rounded-xl"
                src={video.src}
                muted
                preload="metadata"
              />
              <p className="text-sm mt-1 text-center">
                {video.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Videop
