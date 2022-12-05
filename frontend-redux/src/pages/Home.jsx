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

    
    // const [paymentProcessor, setPaymentProcessor] = useState(undefined);
    // const [dai, setDai] = useState(undefined);
    const {user} = useSelector((state) => state.auth)

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }
    },[user, navigate])

    // const promise = 
    
    // new Promise((resolve,reject) => {
    //     window.addEventListener('load', async() => {
    //         if(window.ethereum) {
    //             await window.ethereum.enable();
    //             const provider = new ethers.providers.Web3Provider(window.ethereum);
    //             const signer = provider.getSigner();
    //             const paymentProcessor = new ethers.Contract(
    //                 PaymentProcessor.networks[5777].address,
    //                 PaymentProcessor.abi,
    //                 signer
    //             )
    //             console.log(paymentProcessor)
    //             console.log("yes");

    //             const dai = new Contract(
    //                 Dai.networks[5777].address,
    //                 Dai.abi,
    //                 signer
    //             )

    //             resolve([paymentProcessor, dai]);
    //             // setPaymentProcessor(paymentProcessor);
                
    //         } 
    //         else {
    //         resolve([1, 1])
            
    //         }
    //     })
    // })
    
    // const [p,d] = promise.then(values => {
    //     return [values[0], values[1]]
    // })
    
    // console.log(p);
    // console.log(paymentProcessor);
    // console.log(paymentProcesso)

    // useEffect(() => {
    //     const init = async() => {

    //         if(!user) {
    //             navigate('/login')
    //           }
              
    //         const {paymentProcessor, dai} = await getBlockchain();
    //         setPaymentProcessor(paymentProcessor);
    //         setDai(dai);
    //         console.log(dai);
    //     }
    //     init();
    // },[user, navigate])
    
    

    // useEffect(() => {
    //     const init = async() => {
    //       const { paymentProcessor, dai } = await getBlockchain()  
          
          
    //       setPaymentProcessor(paymentProcessor);
          
    //       setDai(dai);
    //     }
    //     init();
    //   },[])
    
    
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