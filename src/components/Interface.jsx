import React, { Component } from "react";
import SortSelection from "./SortSelection";
import Characters from "./Characters";

class Interface extends Component {
  render() {
    const { onSortSelection, onDeleteClick, onLikeClick, characters } =
      this.props;
    return (
      <div className="container">
        <SortSelection onSortSelection={onSortSelection} />
        <Characters
          characters={characters}
          onDeleteClick={onDeleteClick}
          onLikeClick={onLikeClick}
        />
      </div>
    );
  }
}

export default Interface;
