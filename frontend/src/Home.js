import getBlockchain from "./ethereum";
import React, {useState, useEffect} from 'react'
import Store from "./Store";
import Navigationbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function Home() {
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

  if(typeof window.ethereum === 'undefined') {
    return(
      <div>
        
      
      <div className="container">
        <div className="col-sm-12">
          <h1>Blockchain Ecommerce App</h1>
          <p>You need to install the latest version of MetaMask</p>
        </div>
      </div>
      </div>
    )
  }
 
  return (
    <div>
      
    
    <div className="container">
        <div className="col-sm-12">
          <h1>Blockchain Ecommerce App</h1>
          <Store paymentProcessor={paymentProcessor} dai={dai} />
          
        </div>
      </div>
      </div>
  );
 
}

export default Home;
