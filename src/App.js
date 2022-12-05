import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Eshop from './Eshop';
import Contact from './Contact';
import About from './About';
import Offers from './Offers';

function App() {

  return (<Router>

        <nav>
          <Link to="/" className='link'>Home</Link>
          <Link to="/eshop" className='link'>E-Catalog</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/like" className='link'>Offers</Link>
          <Link to="/contact" className='link'>Contact</Link>
        </nav>

        <Routes>
        <Route path='/' element={ <Home/>} />
          <Route path='/eshop' element={ <Eshop/>} />
          <Route path='/about' element={ <About/>} />
          <Route path='/like' element={ <Offers />} />
          <Route path='/contact' element={ <Contact/>} />
        </Routes>

      </Router>
  );
}

export default App;
