import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home'
import Cart from './Cart'
import Navigationbar from './Navbar';
import {useState} from 'react';
import React from 'react';


function App() {
    
    return (
      <div className="App">
          <Router>
              <Navigationbar />
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  
              </Routes>
          </Router>
      </div>
    );
}

export default App;