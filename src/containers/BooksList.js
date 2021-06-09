import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { actionFilter, actionRemove } from '../actions';
import store from '../store';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, filter }) => {
  const handleBookRemove = (id) => {
    store.dispatch(actionRemove({ id }));
  };

  const handleFilterChange = (e) => {
    store.dispatch(actionFilter(e.target.value));
  };

  let filteredBooks = books;

  if (filter !== 'ALL') {
    filteredBooks = books.filter((book) => book.category === filter);
  }

  return (
    <div>

      <CategoryFilter handleFilterChange={handleFilterChange} />

      {
        filteredBooks.map((book) => (
          <Book
            id={book.id}
            title={book.title}
            category={book.category}
            key={book.id}
            removeBook={handleBookRemove}
          />
        ))
}
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.appReducer.books,
  filter: state.filterReducer.category,
});

export default connect(mapStateToProps)(BooksList);
