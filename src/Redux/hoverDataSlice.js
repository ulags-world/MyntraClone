import { createSlice } from "@reduxjs/toolkit";


export const hoverData = createSlice({
    name : 'hoverData',
    initialState : [],
    reducers:{
        getHoverData : (state , action)=>{
            return action.payload
        }
    }
})

export const {getHoverData} = hoverData.actions;
export default hoverData.reducer;