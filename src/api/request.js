import axios from './index'

export const getHomeList=()=>{
    return axios.get('/mobile/home')
}

export const getHomeClassify=()=>{
    return axios.get('/mobile/classify')
}
