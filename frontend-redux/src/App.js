import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useEffect, useState, useRef} from 'react'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import getBlockchain from './ethereum';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register';
import Cart from './pages/Cart';

function App() {

  const [paymentProcessor, setPaymentProcessor] = useState(undefined);
  const [dai, setDai] = useState(undefined);

  useEffect(() => {
    const init = async() => {
      const { paymentProcessor, dai } = await getBlockchain()  
      
      
      setPaymentProcessor(paymentProcessor);
      
      setDai(dai);
    }
    init();
  },[])
  return (
    <>
      <Router>
        <div style={{background:'#17202A'}}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home paymentProcessor={paymentProcessor} dai={dai}/>} />
            <Route path = '/cart' element = {<Cart paymentProcessor={paymentProcessor} dai={dai}/>} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
