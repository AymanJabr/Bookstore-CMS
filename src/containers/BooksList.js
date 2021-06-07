import React from 'react';
import { connect } from 'redux';

const BooksList = () => (
  <div>
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <tr />
    </table>
  </div>
);

export default connect(mapStateToProps)(BooksList);
