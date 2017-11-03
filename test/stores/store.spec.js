import {createStore} from '../../src/store'
import { expect } from 'chai'

describe('store', () => {
  it('should increment 1 after dispatch INCREMENT', () => {

  	const counter = (state = 0, action) => {
			switch (action.type) {
				case 'INCREMENT': 
					return state + 1;
				case 'DECREMENT' :
					return state - 1;
				default :
					return state
			}
		}

  	const store = createStore(counter);

		store.subscribe(() => {
		  	// console.log(store.getState())
		  	expect(
		      store.getState()
		    ).eql(1)
		})

		store.dispatch({type: 'INCREMENT'})
  })
})