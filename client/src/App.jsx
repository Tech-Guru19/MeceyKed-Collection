import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Collection as CollectionPage } from './pages/Collection'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collection" element={<CollectionPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App