import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    term: 'reactjs'
  };

  inputChangeHandler = (term) => {
    this.setState({term});
    this.props.onSearchTermChange(term);
  };

  render () {
    return (
      <div className="form-group col-md-8 offset-md-2">
        <input className="form-control" type="text" onChange={event => this.inputChangeHandler(event.target.value)} value={this.state.term}/>
      </div>
    );
  }

}

export default SearchBar;




