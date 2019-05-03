import React, {Component} from 'react'


export default class Page extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            currentPage: props.currentPage,
            totalPages: props.totalPages,
            totalPages: props.totalPages,
            previousPage: props.previousPage,
            nextPage: props.nextPage
         }
    }

    handleChange() {

    }

    CurrentPage(page) {
        let status = (this.state.currentPage === page ? 'active' : '');
        return status
    }

    Activation(action) {
        let status = (action === 'Yes' ? 'active' : 'disabled');
        return status
    }

    renderRows() {
        const list = []

        if(this.state.totalPages > 0) {
            for(var i = 0; i < this.state.totalPages; i++) {
                let count = i + 1;

                list[i] = (
                    <li className={"page-item "+ this.CurrentPage(count) } key={i}>
                        <a className="page-link" href="#" onClick={this.props.handlePaginationClick} data-value={count}>{count}</a>
                    </li>         
                )
            }
        } 
        
        return list
    }

    render() {
        return (
            <ul className="pagination pagination-sm">
                <li className={"page-item " + this.Activation(this.state.previousPage) }>
                    <a className="page-link" href="#" onClick="">Anterior</a>
                </li>
                {this.renderRows()}
                <li className={"page-item " + this.Activation(this.state.nextPage) }>
                    <a className="page-link" href="#" onClick="">Próximo</a>
                </li>
            </ul>
        )
    }
}