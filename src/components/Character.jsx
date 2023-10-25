import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

class Character extends Component {
  render() {
    const { character, quote, image, characterDirection } =
      this.props.character;

    console.log(characterDirection);

    if (characterDirection === "Left") {
      return (
        <div className="character">
          <Name name={character} />
          <div className="imageQuote">
            <Image image={image} />
            <Quote quote={quote} />
          </div>
          <Controls />
        </div>
      );
    }

    return (
      <div className="character">
        <Name name={character} />
        <div className="imageQuote">
          <Quote quote={quote} />
          <Image image={image} />
        </div>
        <Controls />
      </div>
    );
  }
}

export default Character;
