import axios from "axios";
import baseURL from "../constant/baseUrl"

export const instanceAxios = axios.create({
    baseURL
});


