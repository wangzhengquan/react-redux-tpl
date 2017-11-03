/**
 * 返回一个reducer 
 * @param  {[type]} reducers [description]
 * @return {[type]}          [description]
 */
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce( 
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action)
        return nextState
      }, 
      {}
    )
  }
  
}

export default combineReducers