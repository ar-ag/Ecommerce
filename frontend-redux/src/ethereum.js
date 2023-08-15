import {ethers,Contract} from 'ethers'
import PaymentProcessor from '../src/contracts/PaymentProcessor.json'
import Dai from '../src/contracts/Dai.json'

const getBlockchain = () => 
    
    new Promise((resolve,reject) => {
        window.addEventListener('load', async() => {
            if(window.ethereum) {
                await window.ethereum.enable();
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const paymentProcessor = new ethers.Contract(
                    PaymentProcessor.networks[5777].address,
                    PaymentProcessor.abi,
                    signer
                )
                console.log(paymentProcessor.address)
                console.log("yes");

                const dai = new ethers.Contract(
                    Dai.networks[5777].address,
                    Dai.abi,
                    signer
                )

                resolve({provider, paymentProcessor, dai});
                
            } 
            else {
            resolve({provider:undefined, paymentProcessor:undefined, dai:undefined})
             
            }
        })
    })

export default getBlockchain;