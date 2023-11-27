import axios from "axios";

const NEW_API_KEY = "656ee67a66d14e1eb74133424232111"

// Not defaulted, param should be required
export const getCurrentWeather = async (city: string = 'Belgrade') => {
  console.log(city);
  try {
    const res = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${NEW_API_KEY}&q=${city}`
    );
    return res;
  } catch (error) {
    // Add error handler, like error popup
    console.log(error);
  }
};
