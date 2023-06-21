import axios from "axios";
import { baseURL } from "../Constants/constants";
import  {endpoints} from "../Constants/endpoints";
import {  ProfileFormValues } from "../Interfaces/Interfaces";

export const getUserService = async() => {
  // const token = localStorage.getItem('myToken')
  const token = ''
  const header = `Authorization: Bearer ${token}`
  console.log("token from frontend",token)
    // const res = await fetch(`${baseURL}${endpoints.user.GET_USER_PROFILE}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     return data
    //   });
    //   return res;
    const res = await axios.get(`${baseURL}${endpoints.user.GET_USER_PROFILE}`,{ headers: {header}});
    return res.data;
}

export const postUserService = async(data: ProfileFormValues) => {
  const res = await axios.post(`${baseURL}${endpoints.user.GET_USER_PROFILE}`, data);
  return res.data;
}