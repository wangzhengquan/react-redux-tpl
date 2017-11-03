import todos from './todos'
import visibilityFilter from './visibilityFilter'
import combineReducers from '../combineReducers'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

// console.dir(todoApp)
export default todoApp
