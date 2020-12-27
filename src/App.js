import React from 'react'
import { Route } from 'react-router-dom'

import CharactersList from 'components/CharactersList'
import CharactersPage from 'components/CharactersPage'
import Header from 'components/Header'

function App() {
	return (
		<div className="App">
			<Header />
			<Route path="/" exact component={CharactersList} />
			<Route path="/peoplepage" component={CharactersPage} />
		</div>
	)
}

export default App
