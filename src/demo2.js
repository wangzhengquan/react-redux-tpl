/**
 * React 生命周期
 */

import React from 'react'
import ReactDOM from 'react-dom'
class Greeting extends React.Component {
	/**
	 * The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
	  super(props);
	  this.state = {
	    name: props.name
	  };
	}
	/**
	 * componentWillMount() is invoked immediately before mounting occurs. It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering. Generally, we recommend using the constructor() instead.
	 * @return {[type]} [description]
	 */
	componentWillMount() {
		// alert('componentWillMount')
	}

  render() {
  	 alert('render')
    return <h1>Hello, {this.props.name}</h1>;
  }

  /**
   * componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
   * @return {[type]} [description]
   */
  componentDidMount() {
  	// alert('componentDidMount')
  }


  /**
   * componentWillReceiveProps() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method.
   * @param  {[type]} nextProps [description]
   * @return {[type]}           [description]
   */
  componentWillReceiveProps(nextProps) {
  	alert('componentWillReceiveProps '+ JSON.stringify(nextProps))
  }

  /**
   * componentWillUpdate() is invoked immediately before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.
   * @param  {[type]} nextProps [description]
   * @param  {[type]} nextState [description]
   * @return {[type]}           [description]
   */
  componentWillUpdate(nextProps, nextState) {
  	alert('componentWillUpdate '+ JSON.stringify(nextState))
  }

  /**
   * componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
   * @param  {[type]} prevProps [description]
   * @param  {[type]} prevState [description]
   * @return {[type]}           [description]
   */
  componentDidUpdate(prevProps, prevState) {
  	alert('componentDidUpdate '+ JSON.stringify(prevState))
  }
}


 

const NameInput = (props) => {
	let input;
	return (
		<div> 
			<input type="text" ref={node => {
        input = node
      }}/>
			<button onClick={() => {props.onClick(input.value)}}>确定</button>
		</div>
	)

}

 

export default class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    name: 'baybay'
	  };
	  this.handleClick = this.handleClick.bind(this)
	}

	handleClick(name) {
		this.setState({
			name
		})
	}

	render() {
  	 
    return (
    	<div>
    		<NameInput onClick={this.handleClick}/>
    		<Greeting name={this.state.name}/>
    	</div>
    )
  }
}

/** https://reactjs.org/docs/react-component.html */