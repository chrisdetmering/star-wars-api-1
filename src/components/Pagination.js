import React from 'react'
import 'bootstrap/dist/css//bootstrap.min.css'

function Pagination(props) {
    return (
        <ul className='nav'  style={{ display: 'flex', justifyContent: 'center' }}>
            <button className='btn btn-dark' onClick={props.handleNextPage} style={{margin: 5}} >1</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} style={{margin: 5}}  >2</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} style={{margin: 5}}  >3</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} style={{margin: 5}}  >4</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} style={{margin: 5}}  >5</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} style={{margin: 5}}  >6</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} style={{margin: 5}}  >7</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} style={{margin: 5}}  >8</button>
            <button className='btn btn-dark' onClick={props.handleNextPage} style={{margin: 5}}  >9</button>
        </ul>
    )
}


export default Pagination