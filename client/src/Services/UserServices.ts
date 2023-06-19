import axios from "axios";
import { baseURL } from "../Constants/constants";
import  {endpoints} from "../Constants/endpoints";
import {  ProfileFormValues } from "../Interfaces/Interfaces";

export const getUserService = async() => {
    const res = await fetch(`${baseURL}${endpoints.user.GET_USER_PROFILE}`)
      .then((response) => response.json())
      .then((data) => {
        return data
      });
      return res;
}

export const postUserService = async(data: ProfileFormValues) => {
  const res = await axios.post(`${baseURL}${endpoints.user.GET_USER_PROFILE}`, data);
  return res.data;
}