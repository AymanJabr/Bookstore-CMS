const BOOK_CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const submitForm = (e) => {
  e.preventDefault();
};

const BooksForm = () => (
  <form onSubmit={submitForm}>
    <label htmlFor="btitle">
      Book Title:
      <input type="text" id="btitle" name="btitle" value="I am Malala " />
    </label>

    <select>
      {
        BOOK_CATEGORIES.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))
      }

    </select>

    <input type="submit" value="Submit" />
  </form>
);

export default BooksForm;
