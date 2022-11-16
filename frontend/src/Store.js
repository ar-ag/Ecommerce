import React, { useState } from 'react';
import {ethers} from 'ethers';
import axios from 'axios';

const API_URL = 'http://localhost:4000' 

const ITEMS = [
    {
        id:1,
        price:ethers.utils.parseEther('100')
    },
    {
        id:2,
        price:ethers.utils.parseEther('200')
    }
]

function Store({paymentProcessor, dai}) {
    const [url, seturl] = useState('');
    const buy = async item => {
        const response1 = await axios.get(`${API_URL}/api/getPaymentId/${item.id}`);
        
        const tx1 = await dai.approve(paymentProcessor.address, item.price);
        
        await tx1.wait();
        
        const tx2 = await paymentProcessor.pay(100, response1.data.paymentId);
        await tx2.wait();

        await new Promise(resolve => setTimeout(resolve, 5000));

        const response2 = await axios.get(`${API_URL}/api/getItemUrl/${response1.data.paymentId}`);
        // console.log(response2.data.url);
        
        seturl(response2.data.url);
        // useEffect(() => {
        //   const init = async() => {
        //     seturl(response2.data.url)
        //   }
        // init();
          
        // }, [])
        
        console.log(url)
        if(response2.data) {
            alert(`congo successfully bought ${response2.data.url}`)
        }

    }
    return(
    <ul className='list-group'>
        <li className='list-group-item'>
            Buy item 1 - <span className='front-weight-bold'>100 DAI</span>
            <button type='button' className='btn btn-primary float-right' onClick={() => buy(ITEMS[0])}>Buy</button>
        </li>

        <li className='list-group-item'>
            Buy item 2 - <span className='front-weight-bold'>200 DAI</span>
            <button type='button' className='btn btn-primary float-right' onClick={() => buy(ITEMS[1])}>Buy</button>
        </li>
    </ul>
    );
}

export default Store;