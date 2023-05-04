import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/HomePage/Home/Home';
import Recipe from './Pages/Recipe/Recipe';
import Spinner from './Components/Shared/Spinner/Spinner';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:id",
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader: ({ params }) => fetch(`https://delight-chef-server-doha0.vercel.app/chefdata/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/sign-up",
        element: <Register></Register>
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
