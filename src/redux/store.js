import { createStore } from 'redux';
import initialState from './initialState.js';

//selectors
export const getAllTables = state => state.tables;
export const getTableById = (state, id) => state.tables.filter(table => table.id === id);

// action creators
export const updateTables = payload => ({ type: 'UPDATE_TABLES', payload });

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TABLES':
      return [...action.payload]
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
