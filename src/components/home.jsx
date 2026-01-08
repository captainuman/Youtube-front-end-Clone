import Navbar from './navbar'
import Body from './body'
import Searchbar from './searchbar'

const Home = () => {
  return (
    <div className="h-screen flex overflow-hidden">

      <Searchbar />

      <div className="flex flex-1">
        <Navbar />
        <Body />
      </div>

    </div>
  )
}

export default Home
