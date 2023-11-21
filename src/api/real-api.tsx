import axios from "axios";

const API_KEY = "2d642ba89b5fb4dcc135605e1d2bef77";


export const getWeather = async (city: string = 'New York') => {
  try {
    const res = await axios.get(
      `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
