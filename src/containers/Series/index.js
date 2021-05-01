import React from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from "../../components/Loader";
import AppIntro from "../../components/Intro";

//An API for TV shows infomation
const queryFormat = "http://api.tvmaze.com/search/shows?q=";

// Container component is concern with making things works
// For Presentation component to display the looks of it
class Series extends React.Component {
  render() {
    return (
      <div>
        {/*
          Special feature to call a functional component with the same name, 
          function name have to be capitalize the first letter to differentiate from normal HTML tags
          <AppIntro />  //The normal way
          {AppIntro()}  //This is OK as it is just JS inside a "{" and "}"
          <Test/>       //It is also ok for function that return a non-JSX,
                        //returns will be convert to string & show on the browser
          */}
        <AppIntro message="An app to display your favorite TV shows"/>
        <div>
          <input 
            value={this.state.searchValue}
            type="text"
            onChange={this.onSearchInputChange}
          />
        </div>
        { 
          !this.state.isFetching 
          && this.state.series.length === 0 
          && this.state.searchValue.trim() !== ''
          && <p>No result</p>
        }
        {
          this.state.isFetching && <Loader />
        }
        {
          !this.state.isFetching && <SeriesList list={this.state.series} />
        }
      </div>
    )
  }


  // "state" is special JS object
  // to which React component react to it changes
  state = {
    series: [],
    searchValue: '',
    isFetching: false,
  }

  // Call after the first render() is called when component first mount
  // Trigger re-rendering if setting state
  componentDidMount() {
  }

  onSearchInputChange = (event) => {
    this.setState({
      searchValue: event.target.value,
      isFetching: true,
    });

    this.fetchData(event.target.value)
    .then(json => this.setState({ series: json, isFetching: false,}));
  }

  fetchData(searchString) {
    const query  = queryFormat + searchString;
    return fetch(query)
    .then(response => response.json())  //.json return a Promise
  }
}

 export default Series;