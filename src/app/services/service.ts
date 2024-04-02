import { API_KEY } from "./apiUrl"

export const fetchApi = async() =>{
  const resp = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=76fb20faaf241f4327443ac5534a9062")
  const data = resp.json();
  return data
}