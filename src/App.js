// import logo from './logo.svg';  <-- Webpack allow svg imports
import './App.css';


function AppIntro(props) {
  return <p className="App-intro">
    This is from a functional component
  </p>
}

// function Test() {
//   return 5;
// }

function App() {
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
        */}
      <AppIntro />
      {/*AppIntro() /*This is OK as it is just JS inside a "{" and "}" */}  
      {/*<Test/>   /*This is also ok*/}
    </div>
  );
}

export default App;
