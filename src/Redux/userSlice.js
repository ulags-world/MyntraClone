import { createSlice } from "@reduxjs/toolkit";


export const isNewUser = createSlice({
    name : 'isNewUser',
    initialState:false,
    reducers: {
        setUserWithToken : (state , action)=>{
            return action.payload
        }
    }
})

export const {setUserWithToken} = isNewUser.actions;
export default isNewUser.reducer;