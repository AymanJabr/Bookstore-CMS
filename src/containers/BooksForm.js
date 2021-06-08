import { useState } from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import { actionCreate } from '../actions/index';

const BOOK_CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = ({ createbook }) => {
  console.log(createbook);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    store.dispatch(actionCreate({ id: Math.random(), title, category }));
    console.log(category);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  return (

    <form onSubmit={submitForm}>
      <label htmlFor="btitle">
        Book Title:
        <input type="text" id="btitle" name="btitle" value={title} onChange={handleTitleChange} />
      </label>

      <select onChange={handleSelectChange}>
        {
        BOOK_CATEGORIES.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))
      }
      </select>

      <input type="submit" value="Submit" onClick={submitForm} />
    </form>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   createbook: () => dispatch(actionCreate()),
// });

BooksForm.propTypes = {
  createbook: PropTypes.func.isRequired,
};

// export default connect(null, {actionCreate})(BooksForm);

export default BooksForm;
