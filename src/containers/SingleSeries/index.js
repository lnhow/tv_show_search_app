import React from 'react';
import 'whatwg-fetch';

import Loader from '../../components/Loader';
import SeriesInfo from '../../components/SeriesInfo';

//An API for TV shows infomation
const queryFormat = "http://api.tvmaze.com/shows/";

class SingleSeries extends React.Component {
  state = {
    series: null,
    isFetching: false,
  }

  componentDidMount() {
    this.fetchData(this.props.match.params.id)
    .then((json) => this.setState({series: json, isFetching: false}));
  }

  render() {
    const {series, isFetching} = this.state;
    return (
      <div>
        { series === null && isFetching && <Loader />}
        {
          !isFetching && series !== null
          && <SeriesInfo series={series}/>
        }
      </div>
    )
  }


  fetchData(showID) {
    const query  = queryFormat + showID;
    this.setState({ isFetching: true });
    return fetch(query)
    .then(response => response.json())  //.json return a Promise
  }
}

export default SingleSeries;