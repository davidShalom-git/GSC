import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Services from './Pages/Services';
import Events from './Pages/Events';
import Video from './Components/Video';
import Easter from './Events/Easter';
import Christmas from './Events/Christmas';
import NewYear from './Events/NewYear';
import Good from './Events/Good';




const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/events' element={<Events />} />
          <Route path='/videos' element={<Video />} />
          <Route path='/easter' element={<Easter />} />
          <Route path='/christmas' element={<Christmas />} />
          <Route path='/newyear' element={<NewYear />} />
          <Route path='/good' element={<Good />} />
        </Routes>
      </Router>



    </>
  )
}

export default App;