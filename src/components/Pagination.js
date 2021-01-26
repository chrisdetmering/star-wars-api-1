import React from 'react'; 
import 'bootstrap/dist/css//bootstrap.min.css'; 
import Button from './Button'; 

function Pagination(props) {
    const NUM_PAGES = 9; 

    function pages() { 
        const pages = [];
        for (let i = 1; i <= NUM_PAGES; i++) { 
             pages.push(<Button 
                onPageClick={props.handleNextPage}
                key={i}>{i}</Button>)   
        }
        return pages; 
    }


    return (
        <ul className='nav'  style={{ display: 'flex', justifyContent: 'center' }}>
            {pages()}
        </ul>
    )
}


export default Pagination