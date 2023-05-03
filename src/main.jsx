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
        element: <Recipe></Recipe>,
        loader: ({ params }) => fetch(`https://delight-chef-server-doha0.vercel.app/chefdata/${params.id}`)
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
