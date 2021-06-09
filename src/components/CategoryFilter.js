import PropTypes from 'prop-types';

const BOOK_CATEGORIES = ['ALL', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ handleFilterChange }) => (
  <form>
    <select onChange={handleFilterChange}>
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

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
