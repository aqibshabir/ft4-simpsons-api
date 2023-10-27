import React, { Component } from "react";

class SortSelection extends Component {
  render() {
    const { onSortSelection } = this.props;
    return (
      <div className="selectControls">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" onChange={onSortSelection}>
          <option value="">---</option>
          <option value="az">Sort Characters by: A to Z</option>
          <option value="za">Sort Characters by: Z to A</option>
          <option value="like">Sort Characters by: Liked</option>
        </select>
      </div>
    );
  }
}

export default SortSelection;
