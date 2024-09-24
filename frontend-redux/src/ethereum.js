import { ethers, Contract } from 'ethers';
import PaymentProcessor from '../src/contracts/PaymentProcessor.json';
import Dai from '../src/contracts/Dai.json';

const getBlockchain = () => {
    console.log("inside getBlockchain()");
    return new Promise((resolve, reject) => {
        console.log("inside promise");

        window.addEventListener('load', async () => {
            if (window.ethereum) {
                try {
                    console.log(window.ethereum);
                    
                    // Request account access
                    await window.ethereum.enable();
                    console.log("after access")
                    // Create ethers provider and signer
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    console.log(signer);
                    // Access PaymentProcessor contract
                    const paymentProcessor = new ethers.Contract(
                        PaymentProcessor.networks[5777].address,
                        PaymentProcessor.abi,
                        signer
                    );

                    console.log("Payment Processor Address:", paymentProcessor.address);
                    
                    // Access Dai contract
                    const dai = new ethers.Contract(
                        Dai.networks[5777].address,
                        Dai.abi,
                        signer
                    );

                    // Resolve with the provider, paymentProcessor, and dai instances
                    resolve({ provider, paymentProcessor, dai });
                } catch (error) {
                    reject(error);  // Handle any errors (e.g., user denied access)
                }
            } else {
                // If no Ethereum provider is detected (e.g., MetaMask)
                resolve({ provider: undefined, paymentProcessor: undefined, dai: undefined });
            }
        });
    });
}

export default getBlockchain;
