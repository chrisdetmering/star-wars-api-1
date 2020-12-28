import React from 'react'

class Input extends React.Component {
    render() {
        return(
            <div className='inputContainer'>
                <form>
                    <div className='form-group-col'>
                        <label>Search:</label>
                        <input 
                            name='characterSearch' 
                            type='text' 
                            className='form-control-row col-sm-6' 
                        />
                    </div>
                    <button>Is this the droid youre looking for?</button>
                </form>
            </div>
        )
    }
}


export default Input 