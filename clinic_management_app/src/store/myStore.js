import {createStore, combineReducers, applyMiddleware} from 'redux';
import searchDoctorReducer from '../reducers/searchDoctorReducer';
import rootSaga from '../sagas/searchDoctorSaga';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    reducer1:searchDoctorReducer
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

// //lets see the action here itself
// // i am going to dispatch any action. say "SEARCH_A_DOCTOR_SUCCESSFUL"action
// store.dispatch({type:"SEARCH_A_DOCTOR_SUCCESSFUL"});
