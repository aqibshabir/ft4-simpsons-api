import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

class Character extends Component {
  state = { liked: false, disliked: false };

  onLikeClick = (id) => {
    this.setState({ liked: !this.state.liked });
  };

  onDislikeClick = (id) => {
    this.setState({ disliked: !this.state.disliked });
  };

  render() {
    const { character, quote, image, characterDirection, id } =
      this.props.character;

    if (characterDirection === "Left") {
      return (
        <div className="character">
          <Name name={character} liked={this.state.liked} />
          <div className="imageQuote">
            <Image image={image} />
            <Quote quote={quote} liked={this.state.liked} />
          </div>
          <Controls
            onLikeClick={this.onLikeClick}
            id={id}
            liked={this.state.liked}
          />
        </div>
      );
    }

    return (
      <div className="character">
        <Name name={character} liked={this.state.liked} />
        <div className="imageQuote">
          <Quote quote={quote} liked={this.state.liked} />
          <Image image={image} />
        </div>
        <Controls
          onLikeClick={this.onLikeClick}
          id={id}
          liked={this.state.liked}
        />
      </div>
    );
  }
}

export default Character;
