import React from 'react'

export default props => {

    return (
        <form className="form-inline">
            <input 
                id='description' 
                className='form-control form-control-sm' 
                placeholder='Pesquisar' 
                onChange={props.handleChange} 
                value={props.description}></input> 
            <button 
                className="btn btn-outline-info btn-sm" 
                type="button"
                onClick={props.handleSearch}>
                <i className="fa fa-search"></i>
            </button>
            <button 
                className="btn btn-outline-secondary btn-sm" 
                type="button"
                onClick={props.handleClear}>
                <i className="fa fa-filter"></i>
            </button>
        </form>
    )
}