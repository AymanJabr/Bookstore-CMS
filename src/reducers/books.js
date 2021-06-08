import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  books: [],
};

export default function appReducer(state = initialState, action) {
  const newBooks = [...state.books];
  switch (action.type) {
    case CREATE_BOOK:

      return {
        books: [
          ...state.books,
          {
            id: Date.now(),
            title: action.book.title,
            category: action.book.category,
          },
        ],
      };

    case REMOVE_BOOK:

      return {
        books: newBooks,

      };

    default:
      return state;
  }
}
