import axios from "axios";

const NEW_API_KEY = "656ee67a66d14e1eb74133424232111"

export const getCurrentWeather = async (city: string) => {
  try {
    const res = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${NEW_API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
    );
    return res.data;
  } catch (error) {
    // Add error handler, like error popup
    console.log(error);
  }
};