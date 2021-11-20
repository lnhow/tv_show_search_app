import React from 'react';

import SeriesList from '../../components/seriesList';
import Loader from "../../components/loader";
import AppIntro from "../../components/intro";
import SearchBox from "../../components/searchBox";

//An API for TV shows infomation
const queryFormat = "https://api.tvmaze.com/search/shows?q=";

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
        {
          this.state.series.length === 0
          && this.state.searchInput === ''
          && <AppIntro message="Search for TV shows"/>
        }
        <div className="wrapper" style={{marginTop: '0.7rem'}}>
          <SearchBox onSubmit= {this.onSearchInputSubmit}/>
        </div>
        { 
          !this.state.isFetching 
          && this.state.series.length === 0 
          && this.state.searchInput !== ''
          && <p>No result</p>
        }
        {
          this.state.isFetching && <Loader />
        }
        {
          !this.state.isFetching
          && this.state.searchInput !== ''
          && <SeriesList list={this.state.series} />
        }
      </div>
    )
  }


  // "state" is special JS object
  // to which React component react to it changes
  state = {
    series: [],
    isFetching: false,
    searchInput: '',
  }

  // Call after the first render() is called when component first mount
  // Trigger re-rendering if setting state
  componentDidMount() {
  }

  onSearchInputSubmit = (searchValue) => {

    this.setState({
      searchInput: searchValue.trim(),
      isFetching: true,
    }, _ => {
      this.fetchData(this.state.searchInput)
      .then(json => this.setState({ series: json, isFetching: false,}));
    });
  
  }

  fetchData(searchString) {
    const query  = queryFormat + searchString;
    return fetch(query)
    .then(response => response.json())  //.json return a Promise
  }
}

 export default Series;