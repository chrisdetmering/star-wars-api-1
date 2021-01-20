import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Input from './components/Input'
import CharacterTable from './components/CharacterTable'
import Pagination from './components/Pagination'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      currentPage: 1,
      characters: []
    }
    this.handleInput = this.handleInput.bind(this)
  }

  async componentDidMount() {
  const peopleURL = `https://swapi.dev/api/people/`
  const peopleResponse = await axios.get(peopleURL)
  const characters = []

  for(const character of peopleResponse.data.results) {
    const homeWorldURL = character.homeworld.replace('http', 'https')
    const homeWorldResponse = await axios.get(homeWorldURL)
    const speciesURL = character.species.toString().replace('http', 'https')
    const speciesResponse = await axios.get(speciesURL)
    character.homeworld = homeWorldResponse.data.name;
    if (!speciesResponse.data.name) {
      character.species = 'Human'
    } else {
      character.species = speciesResponse.data.name;
    }
    
    characters.push(character)
    this.setState({ characters, isLoading: true })
  }
}
  
  async handleInput(searchTerm) {
    const searchUrl = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`)
    const characters = []
    for (const characterSearch of searchUrl.data.results) {
      const homeWorldURL = characterSearch.homeworld.replace('http', 'https')
      const homeWorldResponse = await axios.get(homeWorldURL)
      const speciesURL = characterSearch.species.toString().replace('http', 'https')
      const speciesResponse = await axios.get(speciesURL)
        characterSearch.homeworld = homeWorldResponse.data.name;
        if (!speciesResponse.data.name) {
          characterSearch.species = 'Human'
        } else {
          characterSearch.species = speciesResponse.data.name;
        }
    characters.push(characterSearch)
    this.setState({ characters, isLoading: true })
    }
}


  render() {
    return (
      <div className="App">
        <Header />
        <Input handleInput={this.handleInput} />
        <CharacterTable characterData={this.state.characters} isLoading={this.state.isLoading} />
        <Pagination handleNextPage={this.handleNextPage} />
        
      </div>
    );
  }
}

export default App;
