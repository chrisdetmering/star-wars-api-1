import React from 'react'


class CharacterTable extends React.Component {
    // constructor(props){
    //     super(props)
    // }

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
                        <tr>
                        </tr>
                    </tbody>
                </table>
        )
    }
}


export default CharacterTable