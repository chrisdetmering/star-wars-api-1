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
      character: []
    }
  }

componentDidMount() {
  axios.get(`https://swapi.dev/api/people/`)
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.log(err)
  })
}

render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <CharacterTable />
      </div>
    );
  }
}

export default App;
