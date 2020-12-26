import charactersListReducer from './charactersList'
import charactersPageReducer from './charactersPage'

const reduser = (state, action) => {
	return {
		peoplesList: charactersListReducer(state, action),
		peoplePage: charactersPageReducer(state, action),
	}
}

export default reduser
