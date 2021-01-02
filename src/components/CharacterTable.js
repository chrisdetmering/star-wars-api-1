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
                        <tr>{this.props.people.name}</tr>)}
                    </tbody>
                </table>
        )
    }
}
//*</table>{this.props.people.height} {this.props.people.mass} {this.props.people.homeworld} {this.props.people.species} </tr>)

export default CharacterTable