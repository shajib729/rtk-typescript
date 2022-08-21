import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type CakeStateType = {
    numOfCake: number,
}

const initialState:CakeStateType = {
    numOfCake: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state)=>{
            state.numOfCake--
        },
        restocked: (state, action:PayloadAction<number>)=>{
            state.numOfCake += action.payload 
        }
    },
})


export const cakeReducer = cakeSlice.reducer
export const cakeActions = cakeSlice.actions