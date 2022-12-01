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

function App() {

  return (<Router>

        <nav>
          <Link to="/" className='link'>Home</Link>
          <Link to="/eshop" className='link'>E-shop</Link>
          <Link to="/contact" className='link'>Contact</Link>
        </nav>

        <Routes>
        <Route path='/' element={ <Home/>} />
          <Route path='/eshop' element={ <Eshop/>} />
          <Route path='/contact' element={ <Contact/>} />
        </Routes>

      </Router>
  );
}

export default App;
