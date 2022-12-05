import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import boughtItemsService from './boughtItemsService'

const initialState = {
    boughtItems:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:'',
}

export const addItem = createAsyncThunk('bought/add', async(itemData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await boughtItemsService.addItem(itemData, token)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getBoughtItems = createAsyncThunk('bought/getAll', async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await boughtItemsService.getBoughtItems(token)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const boughtItemsSlice = createSlice({
    name:'boughtItems',
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
                state.boughtItems.push(action.payload)
            })
            .addCase(addItem.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getBoughtItems.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBoughtItems.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.boughtItems = action.payload
            })
            .addCase(getBoughtItems.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const {reset} = boughtItemsSlice.actions
export default boughtItemsSlice.reducer