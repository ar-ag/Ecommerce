import axios from "axios"

const API_URL = '/api/bought/'

const addItem = async(itemData, token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    
    const response = await axios.post(API_URL, itemData, config);
    console.log(response)
    return response.data;
}

const getBoughtItems = async(token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    console.log(response.data)
    return response.data
}

const boughtItemsService = {
    addItem,
    getBoughtItems,
}

export default boughtItemsService