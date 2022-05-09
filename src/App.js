import { Routes, Route } from 'react-router-dom'
import HomePageScreen from './screens/HomePageScreen'
import MovieScreen from './screens/MovieScreen'
import NotFound from './screens/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageScreen />} />
      <Route path="movies/:movieId" element={<MovieScreen />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  )
}

export default App
