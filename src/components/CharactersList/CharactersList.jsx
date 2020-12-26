import React, { useEffect } from 'react'
import { starWarsAPI } from 'api/api'

const CharactersList = () => {
	useEffect(async () => {
		const response = await starWarsAPI.getPeople()

		console.log('response', response)
	}, [])

	return <div>CharactersList</div>
}

export default CharactersList
