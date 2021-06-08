import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  books: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:

      return {
        books: [
          ...state.books,
          {
            id: action.book.id,
            title: action.book.title,
            category: action.book.category,
          },
        ],
      };

    case REMOVE_BOOK:

      return {
        books: [...state.books.filter((book) => action.book.id !== book.id)],
      };

    default:
      return state;
  }
}
