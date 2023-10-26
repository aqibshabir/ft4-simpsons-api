import React, { Component } from "react";

class Name extends Component {
  render() {
    const { name, liked } = this.props;
    return (
      <div className="name">
        <p className={liked ? "likedName" : "unlikeName"}>{name}</p>
      </div>
    );
  }
}

export default Name;
