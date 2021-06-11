import PropTypes from 'prop-types';

const Book = ({
  id, title, category, removeBook,
}) => (

  <div className="Book">
    <div className="book-info">
      <h3 className="bookCategory normal-style">{category}</h3>
      <h1 className="bookTitle normal-style">{title}</h1>
      <p className="author normal-style">Philip Unjani</p>
      <button className="book-buttons" type="button">Commments</button>
      <span className="separate">|</span>
      <button className="book-buttons normal-style" type="button" onClick={() => removeBook(id)}>Remove</button>
      <span className="separate">|</span>
      <button className="book-buttons" type="button">Edit</button>
    </div>
    <div className="chart">
      <div className="chart-graph" />
      <div className="chart-info">
        <h1 className="book-percentage normal-style">64%</h1>
        <p className="completed normal-style">Completed</p>
      </div>
    </div>
    <div className="book__wrapper_right-info">
      <div className="current-chapter normal-style">CURRENT CHAPTER</div>
      <h3 className="current-lesson normal-style">Chapter 17</h3>
      <button className="update-progress normal-style" type="button" disabled>
        Update Progress
      </button>
    </div>
  </div>

);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
