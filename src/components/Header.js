import { getRoles } from '@testing-library/react'
import React from 'react'

class Header extends React.Component {
    render() {
        const name='Star Wars API'
        return(
            <div className='titleContainer'>
                <h1  className='title'>{name}</h1>
            </div>
        )
    }
}


export default Header
