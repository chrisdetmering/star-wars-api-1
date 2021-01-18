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
      characters: []
    }
    this.handleNextPage = this.handleNextPage.bind(this)
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
}
  
handleNextPage(pageNumber) {
  console.log('button clicked')
}
  
  handleInput(e) {
    e.preventDefault()
    console.log('input hit')
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
