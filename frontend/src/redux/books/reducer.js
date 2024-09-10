import * as a from "./actionType.js";

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.EDD_BOOK:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default booksReducer;
