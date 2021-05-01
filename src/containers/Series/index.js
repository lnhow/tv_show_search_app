import React from 'react';
import SeriesList from '../../components/SeriesList';

// Container component is concern with making things works
// For Presentation component to display the looks of it
class Series extends React.Component {
  render() {
    return (
      <div>
        <p>Current TV shows: {this.state.series.length}</p>
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
    //An API for TV infomation
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
    .then(response => response.json())  //.json return a Promise
    .then(json => this.setState({ series: json }));

    // const series = ["Show 1", "Show 2"];

    // this.setState({ series });
  }
}

 export default Series;