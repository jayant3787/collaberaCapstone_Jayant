import {createStore, combineReducers, applyMiddleware} from 'redux';
import searchDoctorReducer from '../reducers/searchDoctorReducer';
import rootSaga from '../sagas/DoctorSaga';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import addDoctorReducer from '../reducers/addDoctorReducer';
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    reducer1:searchDoctorReducer,
    reducer2:addDoctorReducer
});
const store = createStore(
    rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware))
    
    // we are introducing middleware here
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;

// middleware config is done! lets create a saga file and use it 
// run the saga middleware

sagaMiddleware.run(rootSaga);

//once the middleware runs, it will call our helloSaga.
//whenever any action is dispatched to any reducer
