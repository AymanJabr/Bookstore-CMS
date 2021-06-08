import PropTypes from 'prop-types';
import { actionRemove } from '../actions';
import store from '../store';

const Book = ({ id, title, category }) => {
  const removeBook = () => {
    store.dispatch(actionRemove({ id }));
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        {' '}
        <button type="button" onClick={removeBook}>Remove Book</button>
        {' '}
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
