import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { employeeReducer, employeesReducer } from './reducers';

//actions

// reducers

let reducers = combineReducers({
  employee: employeeReducer,
  employees: employeesReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
