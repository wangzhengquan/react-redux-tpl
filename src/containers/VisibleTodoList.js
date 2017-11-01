// import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// const mapStateToProps = (state) => ({
//   todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })

// const mapDispatchToProps = {
//   onTodoClick: toggleTodo
// }

// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)

// export default VisibleTodoList


import PropTypes from 'prop-types' 
import React from 'react'

class VisibleTodoList extends React.Component {

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props;
    const {store} = this.context;
    const state = store.getState();
    return (
      <TodoList 
        todos = {getVisibleTodos(state.todos, state.visibilityFilter)}
        onTodoClick = {toggleTodo}
         
      >
      {props.children}
      </TodoList>
    )
  }
}

VisibleTodoList.contextTypes = {
  store: PropTypes.object
}

export default VisibleTodoList
