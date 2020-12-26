import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'https://swapi.dev/api/people',
})

export const starWarsAPI = {
	getPeople(currentPage = 1) {
		return instance.get(`?page=${currentPage}`).then((res) => res.data)
	},
}
