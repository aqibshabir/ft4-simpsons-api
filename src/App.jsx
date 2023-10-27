import React, { Component } from "react";
import axios from "axios";
import Character from "./components/Character";
import Spinner from "./components/Spinner";
import "./App.css";
import { sortCharacters } from "./utils/sort";

class App extends Component {
  state = {};

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=20`
      );

      //unique id
      data.forEach((el) => {
        el.id = Math.round(Math.random() * 100000);
      });

      this.setState({ simpsons: data });
    } catch (e) {
      console.log("Looks like the API is down!");
    }
  }

  onLikeClick = (id) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.id === id);
    simpsons[index].liked = !simpsons[index].liked;
    this.setState({ simpsons });
  };

  onDeleteClick = (id) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.id === id);
    simpsons.splice(index, 1);
    this.setState({ simpsons });
  };

  onSortSelection = (e) => {
    this.setState({ sort: e.target.value });
  };

  render() {
    const { simpsons, sort } = this.state;

    if (!simpsons) {
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    }

    const _simpsons = [...simpsons];

    sortCharacters(sort, _simpsons);

    return (
      <div className="container">
        <div className="controls">
          <label htmlFor="sort">Sort by: </label>
          <select name="sort" id="sort" onChange={this.onSortSelection}>
            <option value="az">A to Z</option>
            <option value="za">Z to A</option>
          </select>
        </div>
        {simpsons.map((character) => {
          return (
            <Character
              key={character.id}
              character={character}
              onDeleteClick={this.onDeleteClick}
              onLikeClick={this.onLikeClick}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
