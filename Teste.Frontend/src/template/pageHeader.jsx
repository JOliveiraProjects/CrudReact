import React from 'react'


export default props => (
    <header className='page-header'>
        <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Consignado</a>
            <div className="collapse navbar-collapse" id="navb">
                <ul className="navbar-nav mr-auto"></ul>
            </div>
        </nav>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page">{props.name}</li>
                <li className="breadcrumb-item active" aria-current="page">{props.small}</li>
            </ol>
        </nav>
    </header>
)
