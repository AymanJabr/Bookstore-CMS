import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './reducers/store'

const initialState = {
  books: [
      { id: Math.random(), title: 'I am Malala', category: 'Action' },
      { id: Math.random(), title: 'The Survivors', category: 'Horror' },
      { id: Math.random(), title: 'Ghost Rider', category: 'History' },
      { id: Math.random(), title: 'Ghost Rider', category: 'Biography' }
  ]
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
