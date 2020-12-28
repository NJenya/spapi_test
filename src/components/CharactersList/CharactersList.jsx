import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUsers, setCurrentPage } from 'redux/reducers/charactersReducer'
import Loader from 'components/Loader'

const CharactersList = ({
	people,
	isFetching,
	currentPage,
	getUsers,
	totalCount,
	setCurrentPage,
}) => {
	useEffect(() => {
		getUsers(currentPage)
	}, [currentPage])

	if (isFetching) {
		return <Loader />
	}

	const personsList = people.map((persone) => {
		const extractId = (item) => {
			const idRegExp = /\/([0-9]*)\/$/
			return item.url.match(idRegExp)[1]
		}
		const id = extractId(persone)
		console.log(id)
		return (
			<li key={id}>
				<Link to="/peoplepage">{persone.name}</Link>
			</li>
		)
	})

	const countPage = Math.ceil(totalCount / 10)
	const pages = []
	for (let i = 1; i <= countPage; i++) {
		pages.push(i)
	}

	const paginationNumbers = pages.map((numberPage) => {
		return <span onClick={() => setCurrentPage(numberPage)}>{numberPage}</span>
	})

	return (
		<>
			<ul>
				<div>{personsList}</div>
			</ul>
			<div>{paginationNumbers}</div>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		people: state.peopleList.people,
		currentPage: state.peopleList.currentPage,
		totalCount: state.peopleList.totalCount,
		isFetching: state.peopleList.isFetching,
	}
}

export default connect(mapStateToProps, { getUsers, setCurrentPage })(
	CharactersList
)
