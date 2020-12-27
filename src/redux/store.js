import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import charactersListReducer from './reducers/charactersList'
import charactersPageReducer from './reducers/charactersPage'

// import reducer from './reducers'

const reducers = combineReducers({
	peopleList: charactersListReducer,
	peoplePage: charactersPageReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
