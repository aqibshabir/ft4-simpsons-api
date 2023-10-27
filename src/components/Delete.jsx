import React, { Component } from "react";
import Button from "./Button";

class Delete extends Component {
  render() {
    const { id, onDeleteClick } = this.props;

    return (
      <div className="deleteButton">
        <Button id={id} text={"x"} onClick={onDeleteClick} />
      </div>
    );
  }
}

export default Delete;
