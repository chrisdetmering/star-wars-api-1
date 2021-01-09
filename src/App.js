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

async componentDidMount() {
  const people = await axios.get(`https://swapi.dev/api/people/`)
  console.log(people)
}

// componentDidMount() {
//   const people = `https://swapi.dev/api/people/`
//   const homeWorld = 'https://swapi.dev/api/planets/'
//   const peopleRequest = axios.get(people)
//   const homeWorldRequest = axios.get(homeWorld)
//   axios.all([peopleRequest, homeWorldRequest])
//   .then(
//     axios.spread((...responses) => {
//       const peopleResponse = responses[0];
//       const homeWorldResponse = responses[1];
//       console.log(peopleResponse, homeWorldResponse)
//       this.setState({
//         characters: peopleResponse.data.results,
//         homeWorld: homeWorldResponse.data.results
//       })
//     })
//   )
//   .catch(err => {
//     console.log(err)
//   })
// } 

render() {
  console.log(this.state.isLoading)
    return (
      <div className="App">
        <Header />
        <Input />
        <CharacterTable characterData={this.state.characters} />
      </div>
    );
  }
}

export default App;
