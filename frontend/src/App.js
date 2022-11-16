import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home'
import Cart from './Cart'
import Navigationbar from './Navbar';


function App() {
    return (
      <div className="App">
          <Router>
              <Navigationbar />
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/cart' component={<Cart/>}/>
                  
              </Routes>
          </Router>
      </div>
    );
}

export default App;