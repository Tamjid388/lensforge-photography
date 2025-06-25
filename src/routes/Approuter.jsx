import React from 'react'
import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../Pages/Home/Home';
import { Blog } from '../Pages/Blog/Blog';
import { Contact } from '../Pages/Contact/Contact';

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
        },
        {
            path:'/contact',
            element:<Contact/>
        },

    ]
  },
]);

export default Approuter
