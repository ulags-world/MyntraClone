import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Components/HomePage/HomePage'
import SignUp from '../Components/SignUp/SignUp'
import OtpPage from '../Pages/OtpPage'
import CreateAccount from '../Components/CreateAccount/CreateAccount'
import Password from '../Pages/Password/Password';
import ProductPage from '../Pages/ProductPage/ProductPage';
import ForgetPassword from '../Pages/ForgetPassword/ForgetPassword'
function Router() {
  return (
    <>
    <Routes> 
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/otp' element={<OtpPage />} />
        <Route path='/createaccount' element={<CreateAccount />}/>
        <Route path='/password' element={<Password />}/>
        <Route path='/forgetpassword' element = {<ForgetPassword />}/>
        <Route path='/productlist' element={<ProductPage />}/>
    </Routes>
    </>
  )
}

export default Router