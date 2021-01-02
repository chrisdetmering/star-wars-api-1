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
      characters: []
    }
  }

componentDidMount() {
  axios.get(`https://swapi.dev/api/people/`)
  .then(response => {
    console.log(response.data)
    this.setState({characters: response.data.results})
  })
  .catch(err => {
    console.log(err)
  })
}

render() {
  console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Input />
        <CharacterTable />
        {this.state.characters.map(people => <li key={people.name}>{people.name} {people.height} {people.mass} {people.homeworld} {people.species} </li>)}
      </div>
    );
  }
}

export default App;
