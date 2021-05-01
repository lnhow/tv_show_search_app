import React from 'react';        //React things
import ReactDOM from 'react-dom'; //React to HTML DOM interactions
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const getCurrentDate = function () {
//   return (new Date()).toDateString();
// }
//Babel translate things like this
// const aComponent = 
//   <>
//     <h1>
//       Ok, The instructor is know what he is doing :)
//     </h1>
//     <p>Today is {getCurrentDate() /*JS can be written in curly braces, is a Babel thing*/}</p>
//   </>;
//Into JSX so that it can be render to a html object

ReactDOM.render(
  // aComponent,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //DOM container to render this component
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
