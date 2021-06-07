import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index'


const initialState = {
    books: [
        { id: 0, title: 'I am Malala', category: 'Action' }
    ]
}

// const bookToRemove = (id) => {

// }

export default function appReducer(state = initialState, action) {
    switch (action.type) {

        case 'CREATE_BOOK':

            return {
                books: [
                    ...state.books,
                    {
                        id: Date.now(),
                        title: action.book.title,
                        category: action.book.category
                    }
                ]
            }

        case 'REMOVE_BOOK':
            // let book_to_remove = state.books.filter((book)=> book.id == )
            let newBooks = [...state.books]
            return {

                books: newBooks

            }

        default:
            return state
    }
}