import React from 'react';

class SingleSeries extends React.Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        <p>Series id is {this.props.match.params.id}</p>
      </div>
    )
  }
}

export default SingleSeries;