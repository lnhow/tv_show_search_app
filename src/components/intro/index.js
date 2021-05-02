import './index.css';

//Props is an object that allow passing agruments from component to component
function AppIntro(props) {
  return (
  <div>
    <div className="Down"></div>
    <p className="App-intro">
      { props.message }
    </p>
  </div>
  );
}

//Only 1 export per module i.e once per JS file
export default AppIntro;