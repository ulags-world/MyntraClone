import axios from "axios";

export const getOtp = async (mobile) => {

    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_IP}/auth/otp`,{mobileNumber : mobile})
        console.log(response.body)
          if(response.status === 200){
            return true
          }
      }
      catch (error) {
        return error.message;
      }
}

export const signUp =  async(mobile,otp) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_IP}/auth/signup`,{
      mobileNumber:mobile,
      otp: otp
    });
    console.log("response:",res);
    localStorage.setItem("token",res.data.data.token);
    return res.data.data.isNewuser;
  } catch (error) {
    console.log(error)
  }
}