import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/component/Header';
// import Body from './src/component/Body';
import { BrowserRouter,RouterProvider,Outlet, createBrowserRouter } from 'react-router-dom';
// import AboutUs from './src/component/AboutUs';
import ContactUs from './src/component/ContactUs';
import Error from './src/component/Error';
import ResMenu from './src/component/ResMenu';
import { lazy,useState,useEffect } from 'react';
import {Suspense} from 'react'
import UserContext from './src/utils/UserContext';
const root = ReactDOM.createRoot(document.getElementById("root"))

const AboutUs=lazy(()=>import('./src/component/AboutUs'))


const Grocery=lazy(()=>import('./src/component/Grocery'))

const Body=lazy(()=>import('./src/component/Body'))

const AppLayout= ()=>{
    const [userInfo,setuserInfo]=useState("null")
useEffect(()=>{
    const data={
        name:"Jatin Thakur"
    };
    setuserInfo(data.name)

},[])

  const heading=<h1>This is not done </h1>
    return(
        <UserContext.Provider value={{loggedInUser:userInfo,setuserInfo }}>
        <div className="wrapper w-[100vw] ">
        {/* <UserContext.Provider value={{loggedInUser:"kaju"}}> */}
<Header></Header>
{/* </UserContext.Provider> */}
<Outlet/>
        </div>
        </UserContext.Provider>
    )
}
const applayout=createBrowserRouter([
    {
path:"/",
element:<AppLayout/>,
children:([
{
    path:"/",
    element:<Body/>,
},
{
    path:"/aboutUs",
    element:<Suspense fallback={<Error/>}>
    <AboutUs />
  </Suspense>,

},
{
    path:"/contactUs",
    element:<ContactUs/>,

},
{
    path:"/restaurant/:Id",
    element:<ResMenu/>,

},
{
    path:"/grocery",
    element:<Suspense fallback={Error}><Grocery/></Suspense>,

},

])
,
errorElement:<Error/>
    },
])


root.render(<RouterProvider router={applayout}></RouterProvider>)