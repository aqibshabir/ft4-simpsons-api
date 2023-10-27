import React, { Component } from "react";
import Character from "./Character";

class Characters extends Component {
  render() {
    const { characters, onDeleteClick, onLikeClick } = this.props;
    return characters.map((character) => {
      return (
        <Character
          key={character.id}
          character={character}
          onDeleteClick={onDeleteClick}
          onLikeClick={onLikeClick}
        />
      );
    });
  }
}

export default Characters;
