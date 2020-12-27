import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUsers } from 'redux/reducers/charactersList'
import Loader from 'components/Loader'

const CharactersList = ({ people, isFetching, getUsers, totalCount }) => {
	useEffect(() => {
		getUsers()
	}, [])

	if (isFetching) {
		return <Loader />
	}

	const personsList = people.map((persone) => {
		return (
			<div key={persone.id}>
				<Link to="/peoplepage">{persone.name}</Link>
			</div>
		)
	})

	const countPage = Math.ceil(totalCount / 10)
	const pages = []
	for (let i = 1; i <= countPage; i++) {
		pages.push(i)
	}
	console.log('pages', pages)

	// const paginationNumbers =

	return <div>{personsList}</div>
}

const mapStateToProps = (state) => {
	return {
		people: state.peopleList.people,
		currentPage: state.peopleList.currentPage,
		totalCount: state.peopleList.totalCount,
		isFetching: state.peopleList.isFetching,
	}
}

export default connect(mapStateToProps, { getUsers })(CharactersList)
