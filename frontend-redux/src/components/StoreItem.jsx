import React from 'react'
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import '../css/CartItem.css'
import axios from 'axios';
import {addItem, getCart} from '../features/cart/cartSlice'
import {getBoughtItems} from '../features/boughtItems/boughtItemsSlice'


function StoreItem({item}) {


    const cardStyle = {
        background:'#283747',
        color:'#ffffff'
    }

    const imageStyle = {
        width:'267px',
        padding: '1px',
        height:'300px',
        

    }
    const {items, isLoading, isError, message} = useSelector((state) => state.cart)
    const {boughtItems} = useSelector((state) => state.boughtItems)
    const dispatch = useDispatch()

    useEffect(() => {

    
  
        if(isError) {
          console.log(message)
        }
    
        
    
        dispatch(getCart())
        dispatch(getBoughtItems())
    
        
      }, [ isError, message, dispatch])
    const add = async addedItem => {


        let f =0;
        let g = 0;
        items.map((i) => {
          if(addedItem.id === i.id) {
            
            f=1;
          }  
        })
        boughtItems.map((i) => {
            if(addedItem.id === i.id) {
            
                g=1;
              }  
        })
        if(f === 0 && g == 0) {
          
            dispatch(addItem(addedItem));
        
        
            alert(`${addedItem.name} added to cart`);
        
        } 
        else {
          alert('Cannot add an Item twice');
        }
        
        
        
    
      }
  return (
    <>
    {/* <div className="card mt-3 mx-2" style={cardStyle}>
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
                          <h5 className="mb-0">{item.price}</h5>
                        </div>
                        
                        
                        <button onClick={() => add(item)}>Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div> */}


        <div class="col mb-5">
            <div class="card h-100">
                
                <img class="card-img-top" src={item.img} alt="..." style={imageStyle}/>
                
                <div class="card-body p-4">
                    <div class="text-center">
                        
                        <h5 class="fw-bolder">{item.name}</h5>
                        <p><b>Artist : {item.artist}</b></p>
                        {item.price} dai
                    </div>
                </div>
                
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={() => add(item)}>Add to Cart</button></div>
                </div>
            </div>
        </div>
        
        </>
  )
}

export default StoreItem