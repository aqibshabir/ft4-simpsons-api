export const sortCharacters = (i, characters) => {
  if (i === "az") {
    characters.sort((item1, item2) => {
      if (item1.character > item2.character) {
        return 1;
      }
      if (item1.character < item2.character) {
        return -1;
      }
      return 0;
    });
  }

  if (i === "za") {
    characters.sort((item1, item2) => {
      if (item1.character > item2.character) {
        return -1;
      }
      if (item1.character < item2.character) {
        return 1;
      }
      return 0;
    });
  }
};
