import React, { Component } from "react";
import Button from "./Button";

class Controls extends Component {
  render() {
    const { id, liked, onLikeClick, onDeleteClick } = this.props;

    return (
      <div className="controls">
        <Button
          text={liked ? "Unlike" : "Like"}
          id={id}
          onClick={onLikeClick}
          liked={liked}
        />
      </div>
    );
  }
}

export default Controls;
