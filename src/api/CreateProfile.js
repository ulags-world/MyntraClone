import axios from "axios";

export const profile = async(password , name , email , gender , alternateMobile , hintName) =>{
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_IP}/auth/update-profile`,
        {
            name,
            password,
            email,
            gender,
            alternateMobile,
            hintName
        },
        {
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        console.log(response.body)
        if(response.status === 200){
            await getProfile();
            return true
        }
    } catch (error) {
        return error.message
    }
}

export const getProfile = async() =>{
    const res = await axios.get(`${process.env.REACT_APP_SERVER_IP}/auth/get-profile`,{
        headers:{
            "Authorization" : `Bearer ${localStorage.getItem('token') || ""}`
        }
    })
    return await res.data;
}