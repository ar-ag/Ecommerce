import {useEffect, useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import getBlockchain from '../ethereum';
import Store from '../components/Store'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ethers, Contract} from 'ethers'
import PaymentProcessor from '../contracts/PaymentProcessor.json'
import Dai from '../contracts/Dai.json'
import React from 'react'
import Heading from '../components/Heading';

function Home({paymentProcessor, dai}) {
    const navigate = useNavigate();

    
    
    const {user} = useSelector((state) => state.auth)

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }
    },[user, navigate])

    
    
    
    if(typeof window.ethereum === 'undefined') {
        return (
            <div>
                <div className="container">
                    <div className="col-sm-12">
                        <h1>Ecommerce Website</h1>
                        <p>You need to install the latest version of MetaMask</p>
                    </div>
                </div>
            </div>
          )
    }

    return (
        <div>
            <div className="col-sm-12">
              <Heading />
              <Store paymentProcessor={paymentProcessor} dai={dai}/>
              
            </div>
          </div>
          
      );
}

export default Home