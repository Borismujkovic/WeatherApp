import axios from "axios";

type Location = {
  latitude: number;
  longitude: number;
}

const NEW_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const apiKey = process.env.REACT_APP_LOCATION_API_KEY;

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

export const getUserLocation = async (options: Location) => {
  const { latitude, longitude } = options;
  try {
    const res = await axios.get(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`
    );
    return res.data.features[0];
  } catch (error) {
    console.log(error);
  }
};