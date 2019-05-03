import React, { Component } from 'react';

export class ListTelephone extends Component {
    state = {
        telephones: ['telephones']
    }

    handleText = i => e => {
        let telephones = [...this.state.telephones];
        telephones[i] = e.target.value;
        this.setState({ telephones });
    }

    handleDelete = i => e => {
        e.preventDefault();
        let telephones = [
            ...this.state.telephones.slice(0, i),
            ...this.state.telephones.slice(i + 1)
        ];
        this.setState({ telephones });
    }

    addTelephone = e => {
        e.preventDefault();
        let telephones = this.state.telephones.concat(['']);
        this.setState({ telephones });
    }

    render() {
        return (
            <div>
                {this.state.telephones.map((telephones, index) => (
                    <fieldset key={index} className="box-form">
                        <legend>Telefones {index}
                            <button
                                className="btn btn-default float-right"
                                onClick={this.handleDelete(index)}>X</button>
                        </legend>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="telephoneType">Tipo de telefone</label>
                            <div className="col-md-4">
                                <select
                                    id="telephoneType"
                                    name="telephoneType"
                                    className="form-control">
                                    <option value="1">Residencial</option>
                                    <option value="2">Comercial</option>
                                    <option value="3">Celular</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="ddd">DDD</label>
                            <div className="col-md-4">
                                <input
                                    id="ddd"
                                    name="ddd"
                                    type="text"
                                    placeholder="Código da cidade"
                                    className="form-control input-md" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="number">Número</label>
                            <div className="col-md-4">
                                <input
                                    id="number"
                                    name="number"
                                    type="text"
                                    placeholder="Número do seu telefone"
                                    className="form-control input-md" />
                            </div>
                        </div>

                    </fieldset>
                ))}
                <button
                    className="btn btn-default"
                    onClick={this.addTelephone}>Novo telefone</button>
            </div>
        );
    }
}