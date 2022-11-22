import React, { useState } from 'react';
import {ethers} from 'ethers';
import axios from 'axios';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

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
    // const [url, seturl] = useState('');
    // const [cart, setCart] = useState([{
    //     id:'',
    //     price:'',
    // }])
        
    const buy = async item => {
        const response1 = await axios.get(`${API_URL}/api/getPaymentId/${item.id}`);
        
        const tx1 = await dai.approve(paymentProcessor.address, item.price);
        
        await tx1.wait();
        
        const tx2 = await paymentProcessor.pay(item.price, response1.data.paymentId);
        await tx2.wait();
        
        await new Promise(resolve => setTimeout(resolve, 5000));

        const response2 = await axios.get(`${API_URL}/api/getItemUrl/${response1.data.paymentId}`);
        console.log(response2.data.url);
        
        // seturl(response2.data.url);
        // useEffect(() => {
        //   const init = async() => {
        //     seturl(response2.data.url)
        //   }
        // init();
          
        // }, [])
        
        // console.log(url)
        if(response2.data) {
            alert(`congo successfully bought ${response2.data.url}`)
        }

    }


    // const add = async item => {
    //     setCart(ar => [
    //         ...ar,
    //         {
    //             id:item.id,
    //             price:item.price
    //         }
    //     ])
    //     alert(`Item ${item.id} added successfully`);
    // }
    return(
    <ul className='list-group'>
        <li className='list-group-item'>
            Item 1 - <span className='font-weight-bold'>100 DAI</span>
            <div className='text-right'>
            <button type='button' className='btn btn-primary pull-right my-3' onClick={() => buy(ITEMS[0])}>Add</button>
            </div>
        </li>

        <li className='list-group-item'>
            Item 2 - <span className='font-weight-bold'>200 DAI</span>
            <div className='text-right'>
            <button type='button' className='btn btn-primary my-3' onClick={() => buy(ITEMS[1])}>Add</button>
            </div>
        </li>
    </ul>
    );
}

export default Store;