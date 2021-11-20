import { Component } from 'react';
import './index.css';

class SearchBox extends Component {
  state = {
    inputValue: '',
  }

  render() {
    return (
      <div className="SearchBox-Container">
        <input 
          className="SearchBox"
          value={this.state.searchValue}
          type="text"
          placeholder="Search..."
          onChange={this.onSearchInputChange}
        />
      </div>
    );
  }

  onSearchInputChange = (event) => {
    this.setState( {
      inputValue: event.target.value,
    }, _ => {
      this.props.onSubmit(this.state.inputValue);
    })
  }
}

export default SearchBox;