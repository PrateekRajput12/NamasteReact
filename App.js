import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/component/Header';
import Body from './src/component/Body';
import { BrowserRouter,RouterProvider,Outlet, createBrowserRouter } from 'react-router-dom';
// import AboutUs from './src/component/AboutUs';
import ContactUs from './src/component/ContactUs';
import Error from './src/component/Error';
import ResMenu from './src/component/ResMenu';
import { lazy } from 'react';
import {Suspense} from 'react'
const root = ReactDOM.createRoot(document.getElementById("root"))

const AboutUs=lazy(()=>import('./src/component/AboutUs'))


const Grocery=lazy(()=>import('./src/component/Grocery'))


const AppLayout= ()=>{
  const heading=<h1>This is not done </h1>
    return(
        <div className="wrapper w-[100vw] bg-black">
<Header></Header>
<Outlet/>
        </div>
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