import React, { Component } from "react";

class Button extends Component {
  render() {
    const { text, onLikeClick, id, liked } = this.props;

    return (
      <>
        <button
          className={liked ? "like" : "notLike"}
          onClick={() => onLikeClick(id)}
        >
          {liked ? "Undo" : text}
        </button>
      </>
    );
  }
}

export default Button;
