import React, { createContext, useState } from 'react'


export  const Data = createContext()
const Theme = (props) => {

    const [file, setFile] = useState([])
    const [vid , setVid] = useState()
  return (
    <div>
      <Data.Provider value={[file , setFile , vid, setVid]}>
        {props.children}
      </Data.Provider>
    </div>
  )
}

export default Theme
