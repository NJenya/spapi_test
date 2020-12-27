import charactersListReducer from './charactersList'
import charactersPageReducer from './charactersPage'

const reduser = (state, action) => {
	return {
		peopleList: charactersListReducer(state, action),
		peoplePage: charactersPageReducer(state, action),
	}
}

export default reduser
