import React from 'react'


class CharacterTable extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth Date</th>
                            <th>Height</th>
                            <th>Mass</th>
                            <th>Homeworld</th>
                            <th>Species</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.characterData.map(people => 
                            <tr key={people.name}>
                                <td key={people.name}> {people.name} </td>
                                <td key={people.bith_year}> {people.birth_year} </td>
                                <td key={people.height}> {people.height}cm </td>
                                <td key={people.mass}> {people.mass}kg </td>
                                <td key={people.homeworld}> {people.homeworld} </td>
                                <td key={people.species}> {people.species} </td>
                            </tr>)}
                    </tbody>
                </table>
        )
    }
}
//*</table> </tr>) {people.height} {people.mass} {people.homeworld} {people.species}

export default CharacterTable