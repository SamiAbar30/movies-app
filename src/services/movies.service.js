import axios from "axios";
const API_URL = "https://swapi.dev/api/films/";
const apiClient = axios.create({
    baseURL: API_URL,
   
  });
  

export const getMovies=async ()=>{
  return  await apiClient.get();
} 