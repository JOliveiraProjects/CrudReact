import React from 'react'
import Navigation from '../template/navigation'

export default props => (
    <div>
        <div className="d-flex justify-content-center">
            <ul className="pagination pagination-sm">
                <Navigation 
                    currentPage = {props.currentPage}
                    totalPages = {props.totalPages}
                    previousPage = {props.previousPage}
                    nextPage = {props.nextPage}
                    handlePaginationClick={props.handlePaginationClick}/>
            </ul>
        </div>
        <div className="d-flex justify-content-end">
            <span className="small-text">Total registro: {props.totalCount} de {props.pageSize}</span>
        </div>
    </div>
)
