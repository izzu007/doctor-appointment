import {createSlice} from '@reduxjs/toolkit';
export const userSlice = createSlice({
    name: 'user',
    initialSat: {
        user:null
},
reducers:{
        getUser: (stat,action) => {
            state.user = action.payload
        }
    }
})

export const {getUser} = userSlice.actions

