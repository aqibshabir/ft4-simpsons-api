import React, { Component } from "react";
import Button from "./Button";

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <Button text={"Like"} />
        <Button text={"Delete"} />
      </div>
    );
  }
}

export default Controls;
