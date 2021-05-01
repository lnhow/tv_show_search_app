import React from 'react';
import SeriesList from '../../components/SeriesList';

//An API for TV shows infomation
const queryFormat = "http://api.tvmaze.com/search/shows?q=";

// Container component is concern with making things works
// For Presentation component to display the looks of it
class Series extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" onChange={this.onSearchInputChange}/>
        </div>
        <p>Current TV show results: {this.state.series.length}</p>
        <SeriesList list={this.state.series} />
      </div>
    )
  }


  // "state" is special JS object
  // to which React component react to it changes
  state = {
    series: [],
  }

  // Call after the first render() is called when component first mount
  // Trigger re-rendering if setting state
  componentDidMount() {
  }

  onSearchInputChange = (event) => {
    this.fetchData(event.target.value)
    .then(json => this.setState({ series: json }));
  }

  fetchData(searchString) {
    const query  = queryFormat + searchString;
    return fetch(query)
    .then(response => response.json())  //.json return a Promise
  }
}

 export default Series;