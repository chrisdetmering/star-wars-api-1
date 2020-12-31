import React from 'react'
import axios from 'axios'

class CharacterTable extends React.Component {
    render() {
        return(
            <div>
                <table className='table'>
                    <tr>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Homeworld</th>
                        <th>Species</th>
                    </tr>
                </table>
            </div>
        )
    }
}


export default CharacterTable