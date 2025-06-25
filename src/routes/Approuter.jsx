import React from 'react'
import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../Pages/Home/Home';

 const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        }
    ]
  },
]);

export default Approuter
