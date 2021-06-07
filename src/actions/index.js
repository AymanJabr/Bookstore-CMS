export const CREATE_BOOK = 'CREATE BOOK';
export const REMOVE_BOOK = 'REMOVE BOOK';

export const actionCreate = (book) => ({
  type: CREATE_BOOK,
  book,
});

export const actionRemove = (book) => ({
  type: REMOVE_BOOK,
  book,
});
