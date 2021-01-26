import React from 'react'; 

export default function Button(props) { 
  const {onPageClick,  children} = props; 
  const pageNum = children; 

  return ( 
    <button 
      className='btn btn-dark' 
      onClick={() => onPageClick(pageNum)} 
      style={{margin: 5}} >{pageNum}</button>
  )

}