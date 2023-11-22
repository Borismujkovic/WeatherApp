import axios from "axios";

// const API_KEY = "2d642ba89b5fb4dcc135605e1d2bef77";
const NEW_API_KEY = "656ee67a66d14e1eb74133424232111"

// https://api.weatherapi.com/v1/current.json?key=${NEW_API_KEY}&q=${city}&aqi=no

// Not defaulted, param should be required
export const getCurrentWeather = async (city: string) => {
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

// export const getFutureWeather = async (city: string = 'New York') => {
//   try {
//     const res = await axios.get(
//       `https://api.weatherapi.com/v1/future.json?key=${NEW_API_KEY}&q=${city}&q=q`
//     );
//     return res;
//   } catch (error) {
//     // Add error handler, like error popup
//     console.log(error);
//   }
// };
