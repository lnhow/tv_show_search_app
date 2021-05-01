// import logo from './logo.svg';  <-- Webpack allow svg imports
import React from 'react';
import 'whatwg-fetch';
import './App.css';
import Main from '../Main';

// function Test() {
//   return 5;
// }

class App extends React.Component {
    render() {
    return (
      //This comment will not show up in user's browser but can't be written inside a JSX component
      /*This comment will behave the same as the one above*/
      <div className="App">
        {/* This comment is a comment inside a JSX component and can't be written like the 2 above*/}
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">TV series App</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
