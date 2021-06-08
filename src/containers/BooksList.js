import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
        />
      ))}
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({ books: state.appReducer.books });

export default connect(mapStateToProps)(BooksList);
