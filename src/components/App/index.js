// import logo from './logo.svg';  <-- Webpack allow svg imports
import React from 'react';
import './App.css';
import AppIntro from "../Intro";  //Directory

// function Test() {
//   return 5;
// }

class App extends React.Component {
  // "state" is special JS object
  // to which React component react to it changes
  state = {
    series: [],
  }

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

        {/*
          Special feature to call a functional component with the same name, 
          function name have to be capitalize the first letter to differentiate from normal HTML tags
          <AppIntro />  //The normal way
          {AppIntro()}  //This is OK as it is just JS inside a "{" and "}"
          <Test/>       //It is also ok for function that return a non-JSX,
                        //returns will be convert to string & show on the browser
          */}
          <AppIntro message="An app to display your favorite TV shows"/>
          <p>Current TV shows: {this.state.series.length}</p>
      </div>
    );
  }

  // Call after the first render() is called when component first mount
  // Trigger re-rendering if setting state
  componentDidMount() {
    const series = ["Show 1", "Show 2"];

    this.setState({ series });
  }
}

export default App;
