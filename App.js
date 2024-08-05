import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/component/Header';
import Body from './src/component/Body';
import { BrowserRouter,RouterProvider,Outlet, createBrowserRouter } from 'react-router-dom';
import AboutUs from './src/component/AboutUs';
import ContactUs from './src/component/ContactUs';
import Error from './src/component/Error';
import ResMenu from './src/component/ResMenu';
const root = ReactDOM.createRoot(document.getElementById("root"))

const AppLayout= ()=>{
    return(
        <div className="wrapper">
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
    element:<AboutUs/>,

},
{
    path:"/contactUs",
    element:<ContactUs/>,

},
{
    path:"/restaurant/:Id",
    element:<ResMenu/>,

},

])
,
errorElement:<Error/>
    },
])


root.render(<RouterProvider router={applayout}></RouterProvider>)