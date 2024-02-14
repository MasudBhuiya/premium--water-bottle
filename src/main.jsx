import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import AuthProvider from './Provider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Details from './components/Details/Details';
import PrivateRoute from './components/Route/PrivateRoute';
import Blog from './components/Blog/Blog';
import MyAddedCard from './components/MyAddedCard/MyAddedCard';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'myaddedlist',
        element: <PrivateRoute><MyAddedCard></MyAddedCard></PrivateRoute>,
        loader: ()=> fetch("http://localhost:5000/bottles")
      }
    ]
  },
  {
    path: 'about',
    element: <About></About>
  },
  {
    path: 'shop',
    element: <Shop></Shop>,
  },
  {
    path: 'blog',
    element: <Blog></Blog>
  },
  {
    path: 'contact',
    element: <Contact></Contact>
  },
  {
    path: 'shop/details/:id',
    element: <PrivateRoute><Details></Details></PrivateRoute>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
