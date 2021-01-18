import React from 'react'

function Input(props) {
        return(
            <div className='inputContainer'>
                <form>
                    <div className='form-group-col'>
                        <label>Search: </label>
                        <input 
                            name='characterSearch' 
                            type='text' 
                            className='form-control-row col-sm-6' 
                        />
                    </div>
                    <div>
                        <button className='btn btn-dark' onClick={props.handleInput}>Are these the droids you're looking for?</button>
                    </div>
                </form>
            </div>
        )
    }


export default Input 