import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'd888fca5b9msh0a71f5cad583dfbp1bbf5ajsnad84b021aa7a' ,
    },
  });
    
  return data;
}
