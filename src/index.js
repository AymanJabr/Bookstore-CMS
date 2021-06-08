import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import { actionCreate } from './actions/index';

store.dispatch(actionCreate({ id: Math.random(), title: 'I am Malala', category: 'Action' }));
store.dispatch(actionCreate({ id: Math.random(), title: 'The Survivors', category: 'Horror' }));
store.dispatch(actionCreate({ id: Math.random(), title: 'Ghost Rider', category: 'History' }));
store.dispatch(actionCreate({ id: Math.random(), title: 'Ghost Rider', category: 'Biography' }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
