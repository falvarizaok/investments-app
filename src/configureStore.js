import investmentsApp from './reducers';
import { createStore } from 'redux';


const configureStore = () => {
  const store = createStore(
    investmentsApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}

export default configureStore;
