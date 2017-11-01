// import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import PropTypes from 'prop-types' 
import React from 'react'

class FilterLink extends React.Component {

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
      <Link 
        active={props.filter == state.visibilityFilter}
        onClick={() => {
          store.dispatch(setVisibilityFilter(props.filter))
        }}
      >
      {props.children}
      </Link>
    )
  }
}

FilterLink.contextTypes = {
  store: PropTypes.object
}

export default FilterLink
