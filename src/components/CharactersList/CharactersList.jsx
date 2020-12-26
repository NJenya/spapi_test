import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { starWarsAPI } from 'api/api'

const CharactersList = ({ peoples }) => {
	// useEffect(async () => {
	// 	const response = await starWarsAPI.getPeople()

	// 	console.log('response', response)
	// }, [])
	console.log('peoples', peoples)

	return <div>CharactersList</div>
}

const mapStateToProps = (state) => {
	return {
		peoples: state.peoplesList.peoples,
		currentPage: state.peoplesList.currentPage,
		isFetching: state.peoplesList.isFetching,
	}
}

export default connect(mapStateToProps, {})(CharactersList)
