import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Login from "../Components/Login/Login";
import Signup from "../Components/Register/Signup";
import Home from "../Components/Home/Home";
import MyPosts from "../Components/MyPosts/MyPosts";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Createpost from "../Components/CreatePost/Createpost";
import Error from "../Components/Errorpage/Error";
import Details from "../Components/AllPosts/Details";
import AllQuery from "../Components/AllQuery/AllQuery";
import Loader from "../Components/Loader/Loader";
import { useState } from "react";
import Update from "../Components/MyPosts/Update";
import RecomMe from "../Components/RecomForME/RecomMe";
import MyRecom from "../Components/MyREcom/MyRecom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
           path: "/",
           element:<Home></Home>,
           loader:()=>fetch('https://pis-server.vercel.app/posts')
        },
         {
          path:"/login",
          element:<Login></Login>
         },
         {
            path: "/signup",
            element:<Signup></Signup>
         },
         {
            path:"/myposts",
            element: <PrivateRoute><MyPosts></MyPosts></PrivateRoute> 

         },
         {
           path:"/myposts/details/:id",
           element: <PrivateRoute><Details></Details></PrivateRoute>
         },
         {
            path:"/allpost/details/:id",
           element: <PrivateRoute><Details></Details></PrivateRoute>
         },
         {
            path:"/createpost",
            element: <Createpost></Createpost>
         },
         {
            path:"/details/:id",
            element: <PrivateRoute><Details></Details></PrivateRoute>
         },
         {
            path:"/allpost",
            element:  <AllQuery></AllQuery>
         },
         {
            path:"/myposts/update/:id",
            element: <PrivateRoute><Update></Update></PrivateRoute>,
           loader:({params})=>fetch(`https://pis-server.vercel.app/posts/${params.id}`)
         },
         {
            path: "/recomMe",
            element: <PrivateRoute><RecomMe></RecomMe> </PrivateRoute>
         },
         {
            path: "/myrecom",
            element: <PrivateRoute><MyRecom></MyRecom> </PrivateRoute>
         }
      ]
    },
  ]);

export default router;