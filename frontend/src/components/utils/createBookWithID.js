import { v4 as uuidv4 } from "uuid";

function createBookWithID(book, source) {
  return {
    ...book,
    source,
    id: uuidv4(),
    isFavorite: false,
  };
}

export default createBookWithID;
