import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type IceCreamStateType = {
    numOfIceCream: number,
}

const initialState:IceCreamStateType = {
    numOfIceCream: 15,
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCream--
        },
        restocked: (state, action:PayloadAction<number>) => {
            state.numOfIceCream += action.payload
        }
    },
    extraReducers:{
        ['cake/ordered']: (state)=>{
            state.numOfIceCream--
        }
    }
})


export const iceCreamReducer = iceCreamSlice.reducer
export const iceCreamActions = iceCreamSlice.actions 