import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    term: 'reactjs'
  };

  keyPressHandler = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      let term = event.target.value;
      this.setState({ term });
      this.props.onSearchTermChange(term);
    }
  }

  // inputChangeHandler = (term) => {
  //   this.setState({term});
  //   this.props.onSearchTermChange(term);
  // };

  render () {
    return (
      <div className="input-group mb-3 col-md-8 offset-md-2">
        <input 
          className="form-control" 
          type="text" 
          onKeyPress={event => this.keyPressHandler(event)} />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">Press Enter to search...</span>
        </div>
      </div>
    );
  }

}

export default SearchBar;




