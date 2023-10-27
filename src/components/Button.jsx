import React, { Component } from "react";

class Button extends Component {
  render() {
    const { text, onClick, id } = this.props;

    return (
      <>
        <button onClick={() => onClick(id)}>{text}</button>
      </>
    );
  }
}

export default Button;
