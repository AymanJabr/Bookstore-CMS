import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { actionRemove } from '../actions';
import store from '../store';

const BooksList = ({ books }) => {
  const handleBookRemove = (id) => {
    store.dispatch(actionRemove({ id }));
  };

  return (
    <div>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map((book) => (
          <Book
            id={book.id}
            title={book.title}
            category={book.category}
            key={book.id}
            removeBook={handleBookRemove}
          />
        ))}
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({ books: state.appReducer.books });

export default connect(mapStateToProps)(BooksList);
