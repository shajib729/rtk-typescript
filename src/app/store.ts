import { configureStore } from '@reduxjs/toolkit'
import { cakeReducer } from '../features/cake/cakeSlice'
import { iceCreamReducer } from '../features/icecream/iceCream'
import { userReducer } from '../features/user/userSlice'
// import reduxLogger from 'redux-logger'

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch