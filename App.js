import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/component/Header';
import Body from './src/component/Body';
const root = ReactDOM.createRoot(document.getElementById("root"))

const AppLayout= ()=>{
    return(
        <div className="wrapper">
<Header></Header>
<Body></Body>
        </div>
    )
}



root.render(<AppLayout/>)