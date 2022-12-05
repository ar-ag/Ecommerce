import React, { useState } from 'react';
import {ethers} from 'ethers';
import axios from 'axios';
import { useSelector, useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import getBlockchain from '../ethereum';
import { addItem } from '../features/cart/cartSlice';
import {getCart} from '../features/cart/cartSlice'
import StoreItem from './StoreItem';


const API_URL = '/api/payment/'
const ITEMS = [
    {
      id:1,
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      name:"Starry Night",
      artist:"Van Gough",
      
      // price:ethers.utils.parseEther('100')
      price:900
  },
  {
      id:2,
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      name:"Mona Lisa",
      artist:"Leonardo Da Vinci",
      // price:ethers.utils.parseEther('200')
      price:1000
  },
  {
    id:3,
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    name:"Girl with a Pearl Earring",
    artist:"Johannes Vermeer",
    // price:ethers.utils.parseEther('200')
    price:800
  },
  {
    id:4,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kfX633RJAJAfQ6eLnqAOGsMqP1jWnyW6Sabzzz2kbDUCutAvuWz4e37hUvrQCHEA1FU&usqp=CAU",
    name:"The Scream",
    artist:"Edvard Munch",
    // price:ethers.utils.parseEther('200')
    price:750
  },
  {
    id:5,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRH8M8uTKzWVbupAzad9i-kuSg5-iQsMqwGx7Lg5XYRgdbIhIwNaJg_fCboc5PtxOPZO4&usqp=CAU",
    name:"The Kiss",
    artist:"Belvedre",
    // price:ethers.utils.parseEther('200')
    price:500
  },
  {
    id:6,
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1200px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    name:"A Sunday on La Grande Jatte",
    artist:"Georges Seurat",
    // price:ethers.utils.parseEther('200')
    price:650
  },
  {
    id:7,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4he3n1oiXGYGUBN-cM_YBTH0SUP7KLx_xoYVLPF5TEy3XMD7zSRNtoebZBvnW5XVVAf0&usqp=CAU",
    name:"Marat Assasinated",
    artist:"Jacques-Louis David",
    // price:ethers.utils.parseEther('200')
    price:700
  },


]

function Store({paymentProcessor, dai}) {
    const {items, isLoading, isError, message} = useSelector((state) => state.cart)

    const dispatch = useDispatch()
  
    useEffect(() => {

      if(isError) {
        console.log(message)
      }

      dispatch(getCart())

    
    }, [ isError, message, dispatch])
  
  
  return (
  <>
  <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      
            {ITEMS.map((item) => (
              <StoreItem key={item._id} item={item} />
            ))}
          </div>
      </div>
  </section>

</>
  )
}

export default Store