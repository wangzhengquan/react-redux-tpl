import React from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { addTodo } from '../actions'

// let AddTodo = ({ dispatch }) => {
//   let input

//   return (
//     <div>
//       <form onSubmit={e => {
//         e.preventDefault()
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(addTodo(input.value))
//         input.value = ''
//       }}>
//         <input ref={node => {
//           input = node
//         }} />
//         <button type="submit">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   )
// }

// AddTodo = connect()(AddTodo)

// export default AddTodo
 
 class AddTodo extends React.Component{
  constructor(props, context) {
    super(props, context)
    // debugger
  }

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
    let input
    let {dispatch} = this.context.store

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }

}


AddTodo.contextTypes = {
  store: PropTypes.object
}

export default AddTodo
 



