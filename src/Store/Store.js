import {combineReducers, createStore} from 'redux';
import mainReducer from '../Reducers/MainReduser';

let RootReducers = combineReducers({
    data: mainReducer,

})

let store = createStore(RootReducers);
export default store;

window.store  = store;