import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
  }
  // handleSearch = (event) => {
  //     event.preventDefault();
  //     this.props.handleSearch()
  // }
  handleChange = event => {
    event.preventDefault();
    this.props.handleChange(event);
  };

  render() {
    return (
      <form className="search" onSubmit={this.props.handleSearch}>
        <input
          className="search-bar"
          type="text"
          onChange={this.handleChange}
        />
        <button className="search-button" type="submit">
          <i class="fas fa-search" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
