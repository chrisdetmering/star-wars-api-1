import React from 'react'
import 'bootstrap/dist/css//bootstrap.min.css'
import { Nav } from 'react-bootstrap'

function Pagination(props) {
    return (
        <nav>
            <button className='btn btn-dark' onClick={props.handleNextPage}>1</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} >2</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} >3</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} >4</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} >5</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} >6</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} >7</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} >8</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} >9</button>

        </nav>
    )
}


export default Pagination