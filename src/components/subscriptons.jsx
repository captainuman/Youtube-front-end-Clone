import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Searchbar from './searchbar'
import datas from './data/data.json'

const Subscriptons = () => {

  return (
    <div className="relative">
      {/* Top fixed search bar */}
      <Searchbar />

      {/* Fixed navbar */}
      <Navbar className="fixed left-0 h-screen" />

      {/* Main content */}
      <main className="lg:ml-20 p-5 pt-20 overflow-y-auto h-screen">
        <div className="flex justify-between items-center mb-5 mr-10">
          <h1 className="font-bold text-xl">Latest</h1>
          <div className="flex gap-3 items-center">
            <h1 className="font-bold">Manage</h1>
            <img src="/src/images/options.png" alt="option 1" className="w-5" />
            <img src="/src/images/options.png" alt="option 2" className="w-5" />
          </div>
        </div>

       <div className="flex flex-wrap gap-4 p-2 lg:justify-between justify-center">
               {datas.map(video => (
                 <div key={video.id} className="w-84 mb-5">
                   <Link to={`/video/${video.id}`}>
                     <video
                       src={video.src}
                       className="w-87  rounded-xl"
                       muted
                       preload="metadata"
                     />
                     <h1 className="text-center">{video.title}</h1>
                   </Link>
                 </div>
               ))}
             </div>
      </main>
    </div>
  )
}

export default Subscriptons
