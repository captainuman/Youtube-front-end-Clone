import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Vidoep from './components/vidoep'
import Subscriptons from './components/subscriptons'
import Profile from './components/profile'
import Create from './components/create'
import Shorts from './components/Shorts'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:category" element={<Home />} />
      <Route path="/video/:id" element={<Vidoep />} />
      <Route path="/subscriptions" element={<Subscriptons />} />
      <Route path="/you" element={<Profile />} />
      <Route path="/create" element={<Create />} />
      <Route path="/shorts" element={<Shorts />} />
    </Routes>
  )
}

export default App
