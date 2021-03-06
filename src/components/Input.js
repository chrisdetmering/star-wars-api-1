import React from 'react'

function Input(props) {
        return(
            <div className='inputContainer'>
                <form >
                    <div className='form-group-col'>
                        <label className="text-light">Search: </label>
                        <input 
                            name='characterSearch' 
                            type='text' 
                            className='form-control-row col-sm-6'
                            onChange={(search) => {props.handleInput(search.target.value)} }
                        />
                    </div>
                    <div>
                        <button className='btn btn-dark'>Are these the droids you're looking for?</button>
                    </div>
                </form>
            </div>
        )
    }


export default Input 