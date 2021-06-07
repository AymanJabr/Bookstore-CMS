const BOOK_CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const submitForm = (e) => {
  e.preventDefault();
  console.log('Form submitted');
  console.log(e);
};

const BooksForm = () => (
  <form onSubmit={submitForm}>
    <label htmlFor="btitle">
      Book Title:
      <input type="text" id="btitle" name="btitle" value="I am Malala " />
    </label>

    <select>
      {
        BOOK_CATEGORIES.map(({ value }) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))
      }
      {/* <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option> */}
    </select>

    <input type="submit" value="Submit" />
  </form>
);

export default BooksForm;
