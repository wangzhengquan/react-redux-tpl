import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import store from './store'
import PropTypes from 'prop-types';



 

class Provider extends React.Component {

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return this.props.children
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
}
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)