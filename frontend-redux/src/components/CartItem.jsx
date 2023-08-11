import React from 'react'
import {useDispatch} from 'react-redux'
import '../css/CartItem.css'
import axios from 'axios';
import {FaTrash} from "react-icons/fa"
import {deleteItem} from '../features/cart/cartSlice'
import { useEffect } from 'react'
import { addItem } from '../features/boughtItems/boughtItemsSlice';

const API_URL = '/api/payment/'

function CartItem({item, paymentProcessor, dai}) {
    const dispatch = useDispatch();

    async function buy() {
      const response1 = await axios.get(API_URL + `getPaymentId/${item.id}`);
      console.log(response1);
      const tx1 = await dai.approve(paymentProcessor.address, item.price);
      
      await tx1.wait();
      console.log(tx1);

      const tx2 = await paymentProcessor.pay(item.price, response1.data.id);
      await tx2.wait();
      
      console.log(tx2);
      await new Promise(resolve => setTimeout(resolve, 5000));

      const response2 = await axios.get(API_URL + `getItemUrl/${response1.data.id}`);
      console.log(response2.data.url);

      const boughtItem = {
        id:item.id,
        img:item.img,
        name:item.name,
        artist:item.artist,
        price:item.price,
        url:response2.data.url
      }

      if(response2.data) {
        alert(`Successfully bought ${response2.data.url} !`);
        dispatch(addItem(boughtItem));
        dispatch(deleteItem(item._id))
      }
    }


    
  return (
    <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                      <div>
                          <img
                            src={item.img}
                            class="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
                        </div>
                        <div className="ms-3">
                          <h5>{item.name}</h5>
                          <p className="small mb-0">{item.artist}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{width: '50px'}}>
                          <h5 className="fw-normal mb-0"></h5>
                        </div>
                        <div style={{width: '80px'}}>
                          <h5 className="mb-0">{item.price} dai</h5>
                        </div>
                        <button onClick= {() => dispatch(deleteItem(item._id))} ><FaTrash /></button>
                        
                        <button onClick={() => buy()}>Buy</button>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default CartItem