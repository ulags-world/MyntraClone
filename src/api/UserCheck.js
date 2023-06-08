import axios from "axios";

export const checkUser = async (mobileNumber) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_IP}/auth/check-user`,{mobileNumber: mobileNumber});
        return res.data.found
    } catch (error) {
       
    }
}