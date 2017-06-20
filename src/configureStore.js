import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import investmentsApp from './reducers';


const configureStore = () => {
  const store = createStore(
    investmentsApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  );

  return store;
}

export default configureStore;
