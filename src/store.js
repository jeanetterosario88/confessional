import {createStore, applyMiddleware}  from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import manageSecret from './Reducers/reducers'
import thunk from 'redux-thunk'


const store = createStore(manageSecret, composeWithDevTools(applyMiddleware(thunk)))


export default store 