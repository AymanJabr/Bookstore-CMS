import PropTypes from 'prop-types';

const Book = ({
  id, title, category, removeBook,
}) => (

  <div className="Book">
    <h3 className="bookCategory">{category}</h3>
    <h1 className="bookTitle">{title}</h1>
    <button className="bookRemove" type="button" onClick={() => removeBook(id)}>Remove</button>

  </div>

);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
