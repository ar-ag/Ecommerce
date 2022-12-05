import axios from "axios"

const API_URL = '/api/cart/'

const addItem = async(cartData, token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    
    const response = await axios.post(API_URL, cartData, config);
    console.log(response)
    return response.data;
}

const getCart = async(token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    console.log(response.data)
    return response.data
}

const deleteItem = async(itemId, token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + itemId, config)
    
    return response.data
}

const cartService = {
    addItem,
    getCart,
    deleteItem


}

export default cartService