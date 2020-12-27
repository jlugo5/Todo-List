import {combineReducers} from 'redux'
import todoListReducer from './todolist/todolist.reducer'

const rootReducer = combineReducers({
    todo: todoListReducer

})

export default rootReducer