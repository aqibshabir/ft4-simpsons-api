import React, { Component } from "react";
import SortSelection from "./SortSelection";
import Characters from "./Characters";
import Search from "./Search";
import Footer from "./Footer";
import { sortCharacters } from "../utils/sort";
import { searchCharacters } from "../utils/search";

class Interface extends Component {
  render() {
    const {
      onSortSelection,
      onDeleteClick,
      onLikeClick,
      characters,
      sort,
      search,
      onSearch,
    } = this.props;

    sortCharacters(sort, characters);

    const searched = searchCharacters(search, characters);

    return (
      <div className="container">
        <Search onSearch={onSearch} />
        <SortSelection onSortSelection={onSortSelection} />
        <Characters
          characters={searched.length > 0 ? searched : characters}
          onDeleteClick={onDeleteClick}
          onLikeClick={onLikeClick}
          sort={sort}
        />
        <Footer />
      </div>
    );
  }
}

export default Interface;
