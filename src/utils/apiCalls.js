import axios from "axios"

// const  BASE_URL = "http://localhost:8000/api/";
const BASE_URL = 'https://react-jobs-api.herokuapp.com/api/';

export const axiosReq = axios.create({
    baseURL:  BASE_URL
})