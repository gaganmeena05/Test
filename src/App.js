import Home from './pages/Home';
import Booking from './pages/Booking';
import './App.css';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className='navbar'>
        <Link className='navbar' to='/'>
            Movieverse 
        </Link>
      </div>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/:id' Component={Booking} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
