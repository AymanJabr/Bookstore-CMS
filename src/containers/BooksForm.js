import { useState } from 'react';
import store from '../store';
import { actionCreate } from '../actions/index';

const BOOK_CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    store.dispatch(actionCreate({ id: Math.random(), title, category }));
    setTitle('');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  return (

    <form onSubmit={submitForm} className="form margin-75">
      <h2 className="add-new">ADD NEW BOOK</h2>
      <input type="text" id="btitle" className="title-input" placeholder="Book Title" name="btitle" value={title} onChange={handleTitleChange} />

      <select onChange={handleSelectChange} className="category-input">
        {
        BOOK_CATEGORIES.map((value) => (
          <option value={value} key={value} className="category-value">
            {value}
          </option>
        ))
      }
      </select>

      <input type="submit" value="ADD BOOK" className="add-book" onClick={submitForm} />
    </form>
  );
};

export default BooksForm;
