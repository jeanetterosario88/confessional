import {createStore, applyMiddleware}  from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import manageSecret from './Reducers/reducers'

const store = createStore(manageSecret, composeWithDevTools()) 


export default store 