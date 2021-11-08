import { AxiosRequestHeaders } from "axios";
import { API_OMDB } from "./http";

export const getMovies = async (params: AxiosRequestHeaders) => {
    const endpoint = "";
  
    const request = await API_OMDB.get(endpoint, { params });
    const response = request.data;
  
    return response;
};
