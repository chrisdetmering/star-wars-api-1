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
                        {this.props.characterData.map(data => 
                            <tr key={data.name}>
                                <td> {data.name} </td>
                                <td> {data.birth_year} </td>
                                <td> {data.height}cm </td>
                                <td> {data.mass}kg </td>
                                <td> {data.homeworld} </td> 
                                <td> {data.species} </td>
                            </tr>)}
                    </tbody>
                </table>
        )
    }
}

export default CharacterTable