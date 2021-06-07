import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
/* eslint-disable react/prop-types */
const BooksList = ({ books }) => (
  <div>
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map((book) => <Book book={book} key={book.id} />)}
    </table>
  </div>
);

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
