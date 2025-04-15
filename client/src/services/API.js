import axios from "axios";

console.log("ENV BASE URL:", process.env.REACT_APP_BASEURL);


const API = axios.create({
    baseURL : process.env.REACT_APP_BASEURL
})

    
API.interceptors.request.use((req)=>{
    if(localStorage.getItem("token")){
req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return req;
})

export default API;