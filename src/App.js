import React, { Component } from 'react'
import 'bootstrap/dist/css//bootstrap.min.css'
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
      isLoading: true,
      currentPage: 1,
      //handleInput: '',
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
    const speciesURL = character.species
    const speciesResponse = await axios.get(speciesURL)
    character.homeworld = homeWorldResponse.data.name;
    //if species is greater than 0 then in if statement...
    if (!speciesResponse.data.name) {
      character.species = 'Human'
    } else {
      character.species = speciesResponse.data.name;
    }
    
    characters.push(character)
    this.setState({ characters })
  }
  console.log(peopleResponse.data)
}
  
  async handleInput(searchTerm) {
    //searchTerm.preventDefault()
    const searchUrl = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`)
    const characters = []
    for (const characterSearch of searchUrl.data.results) {
      const homeWorldURL = characterSearch.homeworld.replace('http', 'https')
      const homeWorldResponse = await axios.get(homeWorldURL)
      const speciesURL = characterSearch.species
      const speciesResponse = await axios.get(speciesURL)
        characterSearch.homeworld = homeWorldResponse.data.name;
      
    if (!speciesResponse.data.name) {
      characterSearch.species = 'Human'
    } else {
      characterSearch.species = speciesResponse.data.name;
    }
    
    characters.push(characterSearch)
    this.setState({ characters: searchTerm })
    }

    console.log(searchUrl.data.results)
}


  render() {
  console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Input handleInput={this.handleInput} />
        <CharacterTable characterData={this.state.characters} />
        <Pagination handleNextPage={this.handleNextPage} />
      </div>
    );
  }
}

export default App;
