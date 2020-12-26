import React from 'react'

import CharactersList from 'components/CharactersList'
import CharactersPage from 'components/CharactersPage'
import Header from 'components/Header'

function App() {
	return (
		<div className="App">
			<Header />
			<CharactersList />
			<CharactersPage />
		</div>
	)
}

export default App
