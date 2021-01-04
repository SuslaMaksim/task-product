import {combineReducers, createStore,applyMiddleware} from 'redux';
import mainReducer from './Reducers/MainReduser';
import createSagaMiddleware from 'redux-saga';
import {watchFetchDataSaga} from './Reducers/MainReduser';

let RootReducers = combineReducers({
    data: mainReducer,

})

const sagaMiddleware  = createSagaMiddleware();

let store = createStore(RootReducers,applyMiddleware(sagaMiddleware));
export default store;
sagaMiddleware.run(watchFetchDataSaga)
window.store  = store;