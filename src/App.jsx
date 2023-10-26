import React, { Component } from "react";
import axios from "axios";
import Character from "./components/Character";
import Spinner from "./components/Spinner";
import "./App.css";

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

  render() {
    const { simpsons } = this.state;

    if (!simpsons) {
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    }

    return (
      <div className="container">
        {simpsons.map((character) => {
          return <Character character={character} />;
        })}
      </div>
    );
  }
}

export default App;
