
export const CREATE_BOOK = "CREATE BOOK"
export const REMOVE_BOOK = "REMOVE BOOK"

export const actionCreate = (book) => {
    return {
        type: CREATE_BOOK,
        book: book
    }
}

export const actionRemove = (book) => {
    return {
        type: REMOVE_BOOK,
        book: book
    }
}

