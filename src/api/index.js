import axios from 'axios';

var service = axios.create({
    baseURL:'/api',
    'content-type':'application/json',
    timeout:5000
})

service.interceptors.request.use((config)=>{
    // if(sessionStorage.getItem('token')){
    //     config.headers['token'] = sessionStorage.getItem('token');
    // }
    return config
})

service.interceptors.response.use((res)=>{
    // if(res.data.status===-1){
    //     window.location.href='/login'
    // }
    return res.data
})

export default service;