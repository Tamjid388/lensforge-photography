import React from 'react'
import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../Pages/Home/Home';
import { Blog } from '../Pages/Blog/Blog';

 const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/blog',
            element:<Blog/>
        }
    ]
  },
]);

export default Approuter
