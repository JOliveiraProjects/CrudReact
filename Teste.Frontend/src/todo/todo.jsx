import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoList from './todoList'
import axios from 'axios'
import TodoChart from './todoChart';

const URL = 'http://localhost:7050/v1'

class Todo extends Component 
{
    constructor(props) {
        super(props)
        this.state = { description: '', list: [], pagination: null, proposed: null }

        this.handleClear = this.handleClear.bind(this)
        this.handleChange = this.handleChange.bind(this) 
        this.handleSearch = this.handleSearch.bind(this)
        this.handlePaginationClick = this.handlePaginationClick.bind(this)
        this.handlePersonDetailClick = this.handlePersonDetailClick.bind(this)

        this.dashRefresh()
    }

    dashRefresh(description = '', page = 1, pageSize = 10) {
        const search = description ? `search=${description}` : '';

        if(search !== '') {
            axios.get(`${URL}/dash?${search}`)             
            .then(resp => this.setState({...this.state, description, list: resp.data, pagination: resp.headers["paging-headers"]}))
        }
        else {
            axios.get(`${URL}/dash?&pageNumber=${page}&pageSize=${pageSize}`)
            .then(resp => this.setState({...this.state, description, list: resp.data, pagination: resp.headers["paging-headers"]}))
        }
    }

    handlePersonDetailClick(e) {
        e.preventDefault();
        
        let currentTarget = e.target;
        let currentId = currentTarget.getAttribute('data-value');

        axios.get(`${URL}/proposed/${currentId}`)             
        .then(resp => this.setState({...this.state, proposed: resp.data }))
        return false
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({...this.state, description: e.target.value })
    }

    handleClear() {
        this.dashRefresh()
    }

    handleSearch() {
        const description = this.state.description 
        this.dashRefresh(description)
    }

    handlePaginationClick(e) {
        e.preventDefault();
        let currentTarget = e.target;
        let currentId = currentTarget.getAttribute('data-value');
        this.dashRefresh('', currentId, 10)
    }

    render() {
        return (
            <div>
                <PageHeader 
                    name="Home" 
                    small="Dash" />

                <section>
                    <div className="container-fluid"> 
                        <div className="row">
                            <div className="col-6 bdr-10">
                                <TodoChart />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 bdr-10">
                                <TodoList 
                                    list={this.state.list} 
                                    handleChange={this.handleChange}
                                    handleSearch={this.handleSearch}
                                    handleClear={this.handleClear}
                                    pagination={this.state.pagination} 
                                    handlePaginationClick={this.handlePaginationClick}
                                    handlePersonDetailClick={this.handlePersonDetailClick}
                                    proposed={this.state.proposed}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Todo