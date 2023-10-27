import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";
import Delete from "./Delete";

class Character extends Component {
  state = {};

  render() {
    const { character, quote, image, characterDirection, id, liked } =
      this.props.character;

    const { onDeleteClick, onLikeClick } = this.props;

    if (characterDirection === "Left") {
      return (
        <div className={liked ? "characterLiked" : "character"} liked={liked}>
          <Delete id={id} onDeleteClick={onDeleteClick} />
          <Name name={character} liked={liked} />
          <div className="imageQuote">
            <Image image={image} />
            <Quote quote={quote} liked={liked} />
          </div>
          <Controls onLikeClick={onLikeClick} id={id} liked={liked} />
        </div>
      );
    }

    return (
      <div className={liked ? "characterLiked" : "character"} liked={liked}>
        <Delete id={id} onDeleteClick={onDeleteClick} />
        <Name name={character} liked={liked} />
        <div className="imageQuote">
          <Quote quote={quote} liked={liked} />
          <Image image={image} />
        </div>
        <Controls onLikeClick={onLikeClick} id={id} liked={liked} />
      </div>
    );
  }
}

export default Character;
