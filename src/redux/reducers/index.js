import charactersListReducer from './charactersList'
import updateCharactersPage from './charactersPage'

const reduser = (state, action) => {
	return {
		bookList: charactersListReducer(state, action),
		shopingCart: charactersPageReducer(state, action),
	}
}

export default reduser
