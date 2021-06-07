import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  books: [
    { id: Math.random(), title: 'I am Malala', category: 'Action' },
    { id: Math.random(), title: 'The Survivors', category: 'Horror' },
    { id: Math.random(), title: 'Ghost Rider', category: 'History' },
    { id: Math.random(), title: 'Ghost Rider', category: 'Biography' },
  ],
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
      // let book_to_remove = state.books.filter((book)=> book.id == )

      return {
        books: newBooks,

      };

    default:
      return state;
  }
}
