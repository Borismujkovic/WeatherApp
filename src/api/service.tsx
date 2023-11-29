import axios from "axios";

const NEW_API_KEY = "656ee67a66d14e1eb74133424232111";
const apiKey = '26465f192bfa480f8d1bf9ce1a05e119'

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

export const getUserLocation = async (latitude: number, longitude: number) => {
  try {
    const res = await axios.get(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`
    );
    return res.data.features[0];
  } catch (error) {
    console.log(error);
  }
};