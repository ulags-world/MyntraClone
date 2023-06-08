import { createSlice } from "@reduxjs/toolkit";


export const mobileNumber = createSlice({
    name: 'mobilenumber',
    initialState: '',
    reducers: {
      setMobileNumber : (state , action)=> {
        return action.payload
      },
    }
});

export const {setMobileNumber} = mobileNumber.actions;
export default mobileNumber.reducer;


