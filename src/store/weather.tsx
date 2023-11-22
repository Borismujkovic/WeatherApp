import { PropsWithChildren, createContext } from "react"
import { useQuery, useQueryClient } from "react-query";
import { getCurrentWeather } from "../api/real-api";

type WeatherProps = {
    weather: any | null;
    isLoading: any | null;
    error: any | null;
    isError: any | null;
}

export const WeatherContext = createContext<WeatherProps>({
    weather: null,
    isLoading: null,
    error: null,
    isError: null,
});

const WeatherProvider = ({children}: PropsWithChildren) => {

    const {data: weather, isLoading, error, isError} = useQuery(["weather"], () => getCurrentWeather('Belgrade'), {
        refetchInterval: false,
    })

    console.log(weather?.data)

    return (
        <WeatherContext.Provider value={{weather, isLoading, error, isError}}>
            {children}
        </WeatherContext.Provider>
    )
}

export {WeatherProvider};