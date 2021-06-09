const BOOK_CATEGORIES = ['ALL', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = () => (
  <form>
    <select>
      {
                BOOK_CATEGORIES.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))
            }
    </select>
  </form>
);

export default CategoryFilter;
