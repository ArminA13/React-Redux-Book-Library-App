import * as a from "./actionType.js";

export const addBook = (newBook) => {
  return {
    type: a.EDD_BOOK,
    payload: newBook,
  };
};

export const deleteBook = (id) => {
  return {
    type: a.DELETE_BOOK,
    payload: id,
  };
};

export const toggleFavorite = (id) => {
  return {
    type: a.TOGGLE_FAVORITE,
    payload: id,
  };
};
