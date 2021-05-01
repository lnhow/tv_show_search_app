//Props is an object that allow passing agruments from component to component
function AppIntro(props) {
  return <p className="App-intro">
    { props.message }
  </p>
}

//Only 1 export per module i.e once per JS file
export default AppIntro;