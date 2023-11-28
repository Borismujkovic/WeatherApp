import "./styles/App.css";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { router } from "./utils/routing";
import { WeatherProvider } from "./store/weather";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
      <div className="App">
        <header className="App-header">
          <RouterProvider router={router} />
        </header>
      </div>
      </WeatherProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
