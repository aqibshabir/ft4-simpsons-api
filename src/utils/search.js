export const searchCharacters = (search = "", characters) => {
  return characters.filter((i) => {
    if (i.character.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    return false;
  });
};
