import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import cartService from './cartService'


const initialState = {
    items:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:'',
}

export const addItem = createAsyncThunk('cart/add', async(cartData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await cartService.addItem(cartData, token)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getCart = createAsyncThunk('cart/getAll', async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await cartService.getCart(token)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteItem = createAsyncThunk('cart/delete', async(id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await cartService.deleteItem(id, token)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        reset:(state) => initialState,  
    },
    extraReducers:(builder) => {
        builder
            .addCase(addItem.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.items.push(action.payload)
            })
            .addCase(addItem.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getCart.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.items = action.payload
            })
            .addCase(getCart.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteItem.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.items = state.items.filter((item) => item._id !== action.payload.id)
            })
            .addCase(deleteItem.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

    },
})

export const {reset} = cartSlice.actions
export default cartSlice.reducer