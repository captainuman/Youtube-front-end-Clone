import React, { useContext, useEffect, useState } from 'react'
import { Data } from './theme'
import Searchbar from './searchbar'
import cdata from './data/data.json'

const Create = () => {
  const [src, setSrc] = useState('')
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const [id, setId] = useState('')



 useEffect(()=>{
 },[])

  const [videos, setVideos] = useContext(Data)

  function handleSubmit(e) {
    e.preventDefault()

    if (!src || !title || !des) {
      alert('Fill all fields. This is not optional.')
      return
    }

    const newVideo = {
      src,
      title,
      des: des,
      id
    }

    setVideos(prev => [newVideo, ...prev])

    // reset form
    setSrc('')
    setTitle('')
    setDes('')
    setId()
  }

  return (
    <div>
      <Searchbar />

      <div className="mt-10 h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-[500px] border p-10 rounded-3xl"
        >
          <label>Video Src</label>
          <input
            value={src}
            onChange={e => setSrc(e.target.value)}
            className="border rounded-full px-4 py-2 outline-none"
            type="text"
            placeholder="Paste video path"
          />

          <label>Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="border rounded-full px-4 py-2 outline-none"
            type="text"
            placeholder="Enter title"
          />
          <label>Id</label>
          <input
            value={id}
            onChange={e => setId(e.target.value)}
            className="border rounded-full px-4 py-2 outline-none"
            type="text"
            placeholder="Enter title"
          />

          <label>Description</label>
          <textarea
            value={des}
            onChange={e => setDes(e.target.value)}
            className="border rounded-xl px-4 py-2 outline-none"
            placeholder="Enter description"
          />

          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-full self-center"
          >
            Add to channel
          </button>
        </form>
      </div>
    </div>
  )
}

export default Create
