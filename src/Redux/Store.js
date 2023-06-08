import { configureStore } from '@reduxjs/toolkit';
import { mobileNumber } from './moblieNumberSlice';
import { isNewUser } from './userSlice';
import { hoverData } from './hoverDataSlice';
const store = configureStore({
    reducer: {
        mobileNumber : mobileNumber.reducer,
        isNewUser : isNewUser.reducer,
        hoverData : hoverData.reducer
    }
});

  
export default store;
