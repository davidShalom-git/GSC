import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Services from './Pages/Services';
import Events from './Pages/Events';
import Video from './Components/Video';








const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/events' element={<Events />} />
          <Route path='/videos' element={<Video />} />
        </Routes>
      </Router>



    </>
  )
}

export default App;