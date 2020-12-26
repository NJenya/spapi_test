const initialState = {
	peoples: [
		{ id: 1, people: '1 people' },
		{ id: 2, people: '2 people' },
		{ id: 3, people: '3 people' },
	],
	currentPage: 1,
	isFetching: false,
}

const charactersListReducer = (state = initialState, action) => {
	return state
}

export default charactersListReducer
