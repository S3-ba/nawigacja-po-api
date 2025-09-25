import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Menu } from './pages/Menu';
import { Duckk } from './pages/duck';
import { Navbar } from './assets/components/Navbar';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/menu' element={<Menu />}/> 
          <Route path='/duck' element={<Duckk />}/>      
        </Routes>
      </Router>
    </>
  )
}

export default App
