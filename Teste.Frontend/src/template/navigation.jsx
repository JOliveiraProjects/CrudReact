import React from 'react'

export default props => {

    const CurrentPage = (page) => {
        let status = (props.currentPage === page ? 'active' : '');
        return status
    }

    const Activation = (action)  => {
        let status = (action === 'Yes' ? 'active' : 'disabled');
        return status
    }

    const renderRows = ()  => {
        const list = []

        if(props.totalPages > 0) {
            for(var i = 0; i < props.totalPages; i++) {
                let index = i + 1;

                list[i] = (
                    <li className={"page-item "+ CurrentPage(index) } key={i}>
                        <a className="page-link" href="#" onClick={props.handlePaginationClick} data-value={index}>{index}</a>
                    </li>         
                )
            }
        } 
        
        return list
    }

    return (
        <ul className="pagination pagination-sm">
            <li className={"page-item " + Activation(props.previousPage) }>
                <a className="page-link" href="#" onClick={props.handlePaginationClick}>Anterior</a>
            </li>
            {renderRows()}
            <li className={"page-item " + Activation(props.nextPage) }>
                <a className="page-link" href="#" onClick={props.handlePaginationClick}>Próximo</a>
            </li>
        </ul>
    )
}
