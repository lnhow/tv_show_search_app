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
          this.state.isFetching && <p>Searching...</p>
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