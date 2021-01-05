import React, {Component} from 'react'
import './App.css';
import Header from './components/Header'
import Input from './components/Input'
import CharacterTable from './components/CharacterTable'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      characters: [],
      homeWorld: []
    }
  }

componentDidMount() {
  let people = `https://swapi.dev/api/people/`
  let homeWorld = 'https://swapi.dev/api/planets/'
  const peopleRequest = axios.get(people)
  const homeworldRequest = axios.get(homeWorld)
  axios.all([peopleRequest, homeworldRequest])
  .then(
    axios.spread((...responses) => {
      const peopleResponse = responses[0];
      const homeWorldResponse = responses[1];
      console.log(peopleResponse, homeWorldResponse)
      this.setState({
        characters: peopleResponse.data.results,
        homeWorld: homeWorldResponse.data.results
      })
    })
  )
  .catch(err => {
    console.log(err)
  })
} 

render() {
  console.log(this.state.isLoading)
    return (
      <div className="App">
        <Header />
        <Input />
        <CharacterTable characterData={this.state.characters, this.state.homeWorld} />
      </div>
    );
  }
}

export default App;
