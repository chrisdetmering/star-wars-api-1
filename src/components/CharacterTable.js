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
                                <td key={data.name}> {data.name} </td>
                                <td key={data.bith_year}> {data.birth_year} </td>
                                <td key={data.height}> {data.height}cm </td>
                                <td key={data.mass}> {data.mass}kg </td>
                                <td key={data.homeworld}> {data.name} </td> 
                                <td key={data.species}> {data.species} </td>
                            </tr>)}
                    </tbody>
                </table>
        )
    }
}

export default CharacterTable