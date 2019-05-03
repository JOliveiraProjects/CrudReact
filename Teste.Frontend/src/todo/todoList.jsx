import React from 'react'
import TodoPagination from './todoPagination'
import IconIf from '../template/iconIf'
import TodoSearch from '../todo/todoSearch'
import PageDetails from '../template/pageDetails'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo.id_Prop}>
                <td scope="row">
                    <a href="#0" className="cd-btn js-cd-panel-trigger" data-panel="main" data-value={todo.id_Prop} onClick={props.handlePersonDetailClick}>{todo.id_Prop}</a>
                </td>
                <td>{todo.nr_Cpf}</td>
                <td>{todo.ds_Name}</td>
                <td>{todo.MainValue}</td>
                <td>{todo.PaymentValue}</td>
                <td>{todo.PaymentDocCCB}</td>
                <td className="text-center"><IconIf iconStatus={todo.Document} /></td>
                <td className="text-center"><IconIf iconStatus={todo.Register} /></td>
                <td className="text-center"><IconIf iconStatus={todo.Outlay} /></td>
            </tr>            
        ))
    }

    const DataPagination = () => {
        if(props.pagination !== undefined) {
            let model = JSON.parse(props.pagination)
            if(model !== null) {
                return(
                    <TodoPagination 
                        totalCount={model.totalCount} 
                        pageSize={model.pageSize}
                        currentPage={model.currentPage}
                        totalPages={model.totalPages}
                        previousPage={model.previousPage}
                        nextPage={model.nextPage}
                        handlePaginationClick={props.handlePaginationClick}/>
                )
            }
        }
    }

    const panelActionTrigger = () => {
        let panelTriggers = document.getElementsByClassName('js-cd-panel-trigger');
        if( panelTriggers.length > 0 ) {           
            for(var i = 0; i < panelTriggers.length; i++) {
                (function(i){
                    var panelClass = 'js-cd-panel-'+panelTriggers[i].getAttribute('data-panel'),
                        panel = document.getElementsByClassName(panelClass)[0];
    
                    // open panel when clicking on trigger btn
                    panelTriggers[i].addEventListener('click', function(event){
                        event.preventDefault();
                        addClass(panel, 'cd-panel--is-visible');
                    });
    
                    //close panel when clicking on 'x' or outside the panel
                    panel.addEventListener('click', function(event){
                        if(hasClass(event.target, 'js-cd-close') || hasClass(event.target, panelClass)) {
                            event.preventDefault();
                            removeClass(panel, 'cd-panel--is-visible');
                        }
                    });
                })(i);
            }
        }
    }

    const hasClass = (el, className) => {
        if (el.classList) return el.classList.contains(className);
        else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
    
    const addClass = (el, className) => {
       if (el.classList) el.classList.add(className);
       else if (!hasClass(el, className)) el.className += " " + className;
    }
    
    const removeClass = (el, className) => {
        if (el.classList) el.classList.remove(className);
        else if (hasClass(el, className)) {
          var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
          el.className=el.className.replace(reg, ' ');
        }
    }

    return (
        <div className="card">
            <div className="card-body">

                <div className="row">
                    <div className="col-12 bdr-10">
                        <div className="d-flex justify-content-end">
                            <h2><span className="small-text">Posição em 21 de Novembro de 2018 - 16:35h</span></h2>
                        </div>
                    </div>

                    <div className="col-12 bdr-10">
                        <div className="d-flex justify-content-end">
                            <TodoSearch
                                handleChange = {props.handleChange}
                                handleSearch = {props.handleSearch}
                                handleClear = {props.handleClear}/>
                        </div>
                    </div>

                    <div className="col-12 bdr-10">
                        <div className="grid-table table-responsive">
                            <table className="table table-sm table-striped table-hover">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Proposta</th>
                                        <th scope="col">CPF</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Valor empréstimo</th>
                                        <th scope="col">Valor parcelas</th>
                                        <th scope="col">CCB</th>
                                        <th scope="col" className="text-center">Documento</th>
                                        <th scope="col" className="text-center">Cadastro</th>
                                        <th scope="col" className="text-center">Desembolso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderRows()}
                                </tbody>
                            </table>
                        </div>
                        {DataPagination()}
                    </div>
                </div>
            </div>
            <PageDetails 
                panelActionTrigger={panelActionTrigger()} 
                proposed={props.proposed} />
        </div>
    )
}
