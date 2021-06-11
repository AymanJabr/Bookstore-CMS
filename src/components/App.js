import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import '../styles.css';

function App() {
  return (
    <div className="App">
      <BooksList />
      <hr className="divide margin-75" />
      <BooksForm />
    </div>
  );
}

export default App;
