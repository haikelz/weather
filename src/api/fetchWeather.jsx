import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'fd1d388eba4fa1169170e505d3a995a0';

export const fetchWeather = async(query) => {
  const { data } = await axios.get(URL, {
    params: {
        q: query, 
        units: 'metric', 
        APPID: API_KEY,
      }
  });

  return data; 
}
