import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//////Following method uses react to create element

//const element = React.createElement('h1',null,"Amol, Welcome to React Programming...");
//ReactDOM.render(element,document.getElementById('root'));

const element = React.createElement(
    "div",
    null,
    React.createElement("h1",{className:"textRed"},"Amol, Welcome to React Programming..."),
    React.createElement("h1",{className:"textGreen"},"Understanding the Creation of Elements in React..."))

ReactDOM.render(element,document.getElementById('root'));

/////Following method uses jsx(javascript xml) to create element, and its converted to single js by babel; 
//means one extra step

/*const welcomeElement = <h1 className='textClass'>Amol, Welcome to React Programming...</h1>;

ReactDOM.render(welcomeElement,document.getElementById('root'));

const newElement = <h1 className='textClass'>Understanding the Creation of Elements in React...</h1>;

ReactDOM.render(newElement,document.getElementById('element'));

const element=(
  <div>
      <h1 className='textRed'>Amol, Welcome to React Programming...</h1>
      <h1 className='textGreen'>Understanding the Creation of Elements in React...</h1>
  </div>
);

ReactDOM.render(element,document.getElementById('root'));*/