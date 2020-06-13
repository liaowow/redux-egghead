import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    visibilityFilter
})

// https://redux.js.org/basics/actions
// https://egghead.io/lessons/react-redux-describing-state-changes-with-actions