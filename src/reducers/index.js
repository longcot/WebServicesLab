import {combineReducers} from 'redux'
import quesReducer from './quesReducer'

export default combineReducers({
    question: quesReducer,
})