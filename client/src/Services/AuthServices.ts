import axios from "axios";
import { baseURL } from "../Constants/constants";
import  {endpoints} from "../Constants/endpoints";
import { AuthFormValues } from "../Interfaces/Interfaces";

export interface tokenValue{
    token: any
}

export const postAuthService = async(data: AuthFormValues) => {
    const res =  await axios.post(`${baseURL}${endpoints.auth.GET_AUTH}`, data);
       return res.data;
}                                                                                                                                                            