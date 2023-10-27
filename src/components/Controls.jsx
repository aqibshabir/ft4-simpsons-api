import React, { Component } from "react";
import Button from "./Button";

class Controls extends Component {
  render() {
    const { id, liked, onLikeClick, onDeleteClick } = this.props;

    return (
      <div className="controls">
        <Button
          text={liked ? "Undo" : "Like"}
          id={id}
          onClick={onLikeClick}
          liked={liked}
        />
        <Button id={id} text={"Delete"} onClick={onDeleteClick} />
      </div>
    );
  }
}

export default Controls;
