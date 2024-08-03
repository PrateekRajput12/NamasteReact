import React from 'react';
import ReactDOM from 'react-dom';


const root =ReactDOM.createRoot(document.getElementById("root"))



    const main= React.createElement("div",{className:"main"},
        React.createElement("h1",{className:"parent"},[
        React.createElement("p",{className:"child 1"},"This is Child 1"),
        React.createElement("p",{className:"child 2"},"This is Child 1")

]))


root.render(main)