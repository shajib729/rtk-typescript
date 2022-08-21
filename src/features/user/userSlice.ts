import { createSlice, createAsyncThunk, PayloadAction, AsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type User = {
    id: number
    name: string
}

type UserType = {
    loading: Boolean,
    users: User[],
    error: string
}

const initialState: UserType = {
    loading: false,
    users: [],
    error: ''
}

// Generates pending, fulfilled and rejected acion types
export const fetchUsers: AsyncThunk<any, void, {}> = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, acion:PayloadAction<User[]>) => {
            state.loading = false
            state.users = acion.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, acion) => {
            state.loading = false
            state.users = []
            state.error = acion.error.message || 'Something went wrong'
        })
    }
})

export const userReducer = userSlice.reducer