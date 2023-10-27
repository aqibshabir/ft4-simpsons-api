import React, { Component } from "react";

class Search extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div className="search">
        <h1>The Simpsons Quotes</h1>
        <input
          id="search"
          type="text"
          placeholder="Search a Character..."
          onInput={onSearch}
        />
      </div>
    );
  }
}

export default Search;
