import React, { Component } from "react";

class Quote extends Component {
  render() {
    const { quote, liked } = this.props;
    return (
      <>
        <div className="quote">
          <p className={liked ? "liked" : "unlike"}>{quote}</p>
        </div>
        <div>
          <p className="likedBold">{liked ? "(Liked)" : ""}</p>
        </div>
      </>
    );
  }
}

export default Quote;
