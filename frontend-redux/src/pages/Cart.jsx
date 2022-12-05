import React from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getCart, reset} from '../features/cart/cartSlice'
import CartItem from '../components/CartItem'
import {getBoughtItems} from '../features/boughtItems/boughtItemsSlice'


function Cart({paymentProcessor, dai}) {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const linkStyle = {
    textDecoration:"none",
    color:'green'
  }

  const {user} = useSelector((state) => state.auth)
  const {items, isLoading, isError, message} = useSelector((state) => state.cart)
  const {boughtItems, isloading, iserror, message1} = useSelector((state) => state.boughtItems) 

  

  useEffect(() => {

    if(!user) {
      navigate('/login')
  }

    if(isError) {
      console.log(message)
    }

    

    dispatch(getCart())
    dispatch(getBoughtItems())

    // return () => {
    //   dispatch(reset())
    // }
  }, [ user, navigate, isError, message, dispatch])


  function total_price(){
    let sum = 0;
    items.map((item) => {
      sum += item.price;
    })
    console.log(sum)
    return sum;
    
  }
  
  
  console.log(total_price())


  return (
    <>
    <section className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
    <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">

            <div className="row">

              <div className="col-lg-7">
                <section className='context'>
                  {
                    items.length > 0 ? (
                      <div className='items'>
                        {items.map((item) => (
                          <CartItem key={item._id} item={item} paymentProcessor={paymentProcessor} dai={dai}/>
                        ))}
                      </div>
                    ) : (
                      <h3>No items in the cart</h3>
                    )
                  }
                </section>
                </div>
                <div className="col-lg-4 bg-light">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-4">
                    <h6 className="text-uppercase">Cart Items</h6>
                    <h6>{items.length}</h6>
                  </div>

                  <div className="d-flex justify-content-between mb-4">
                    <h6 className="text-uppercase">Total Amount</h6>
                    <h6>{total_price()} dai</h6>
                  </div>

                  
                  

                  <hr className="my-4"/>

                  <div className=" justify-content-between mb-5">
                    <h5 className="text-uppercase">Bought Items :  {boughtItems.length}</h5>
                    
                    <ul>
                    {
                      boughtItems.map((bi) => (
                        <li>
                          <a href={bi.url} style={linkStyle} target="_blank">{bi.name}</a>
                        </li>
                      ))
                    }
                    </ul>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* <div>
      {items.map((item) => (
        <p>{item.id}<span>{item.price}</span></p>
      ))}
      Cart
    </div> */}
    </>
  )
}

export default Cart