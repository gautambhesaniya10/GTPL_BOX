import { createStore } from 'redux';
// import  RootReducer  from "./rootReducer";
import pageReducer from "./Reducer"

const store = createStore(pageReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log(store.getState())
export default store;