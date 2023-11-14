import React from 'react';
import './styles/App.css';
import Landing from './pages/Landing';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import Map from './pages/Map';
import Login from './pages/Login';
import Register from './pages/Register';
import FavoritesPage from './pages/FavoritesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'map',
        element: <Map />
      },
      {
        path: 'favorites',
        element: <FavoritesPage />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
