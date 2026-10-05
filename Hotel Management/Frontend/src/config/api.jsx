import axios, { create } from "axios";

export const api = axios.create({
  baseURL: "http://locahost:300/api",
  withCredentials: true,
});


api.interceptors.response.use(
    () => {}, 
    () => {}
)

api.interceptors.request.use(
    () => {}, 
    () => {}
)


