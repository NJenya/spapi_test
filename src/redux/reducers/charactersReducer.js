import { starWarsAPI } from 'api/api'

const SET_PEOPLE = 'SWAPI_TEST/CHARACTERS_LIST/SET_PEOPLE'
const SET_TOTAL_COUNT = 'SWAPI_TEST/CHARACTERS_LIST/SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SWAPI_TEST/CHARACTERS_LIST/SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'SWAPI_TEST/CHARACTERS_LIST/TOGGLE_IS_FETCHING'

const initialState = {
	people: [],
	currentPage: 1,
	totalCount: null,
	isFetching: false,
}

const charactersListReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PEOPLE: {
			return { ...state, people: action.people }
		}
		case SET_TOTAL_COUNT: {
			return { ...state, totalCount: action.totalCount }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		default: {
			return state
		}
	}
}

export const setPeoples = (people) => ({ type: SET_PEOPLE, people })

export const setTotalCount = (totalCount) => ({
	type: SET_TOTAL_COUNT,
	totalCount,
})

export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})

export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
})

export const getUsers = (currentPage) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		starWarsAPI.getPeople(currentPage).then((data) => {
			console.log('data', data)
			dispatch(toggleIsFetching(false))
			dispatch(setPeoples(data.results))
			dispatch(setTotalCount(data.count))
		})
	}
}

export default charactersListReducer
